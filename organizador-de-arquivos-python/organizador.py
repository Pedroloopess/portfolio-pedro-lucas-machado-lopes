import os
import shutil

PASTA_ORIGEM = "arquivos"

TIPOS_ARQUIVOS = {
    "Imagens": [".jpg", ".jpeg", ".png", ".gif"],
    "Documentos": [".doc", ".docx", ".txt"],
    "PDFs": [".pdf"],
    "Planilhas": [".xls", ".xlsx", ".csv"],
    "Compactados": [".zip", ".rar"]
}

def criar_pasta(caminho):
    if not os.path.exists(caminho):
        os.makedirs(caminho)

def organizar_arquivos():
    if not os.path.exists(PASTA_ORIGEM):
        print("Pasta 'arquivos' não encontrada.")
        return

    for arquivo in os.listdir(PASTA_ORIGEM):
        caminho_arquivo = os.path.join(PASTA_ORIGEM, arquivo)

        if os.path.isfile(caminho_arquivo):
            nome, extensao = os.path.splitext(arquivo)
            extensao = extensao.lower()

            pasta_destino = "Outros"

            for categoria, extensoes in TIPOS_ARQUIVOS.items():
                if extensao in extensoes:
                    pasta_destino = categoria
                    break

            caminho_destino = os.path.join(PASTA_ORIGEM, pasta_destino)
            criar_pasta(caminho_destino)

            shutil.move(caminho_arquivo, os.path.join(caminho_destino, arquivo))
            print(f"{arquivo} movido para {pasta_destino}")

organizar_arquivos()
