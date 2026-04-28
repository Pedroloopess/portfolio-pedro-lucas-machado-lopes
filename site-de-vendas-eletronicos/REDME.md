# 🛒 Tech Store - Site de Vendas de Eletrônicos

## 📌 Descrição

O **Tech Store** é um projeto de site de vendas de eletrônicos desenvolvido utilizando **HTML, CSS e JavaScript**, com foco em front-end.

O objetivo foi simular uma loja virtual moderna, com layout responsivo, menu hambúrguer e funcionalidades básicas de interação com o usuário.

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido para praticar conceitos de:

- Desenvolvimento Front-End
- Estruturação de páginas com HTML
- Estilização com CSS
- Interatividade com JavaScript
- Organização de projeto para portfólio no GitHub

---

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

---

## 💡 Funcionalidades

- Menu hambúrguer responsivo
- Layout moderno com cores em azul
- Exibição de produtos
- Botão de adicionar ao carrinho (simulação)
- Contador de itens no carrinho
- Navegação suave entre seções

---

## 📂 Estrutura do Projeto

## 🗄️ Banco de Dados (MER)

```mermaid
erDiagram
    CLIENTE ||--o{ PEDIDO : faz
    PEDIDO ||--o{ ITEM_PEDIDO : possui
    PRODUTO ||--o{ ITEM_PEDIDO : aparece_em
    CATEGORIA ||--o{ PRODUTO : possui
    PEDIDO ||--|| PAGAMENTO : possui

    CLIENTE {
        int id_cliente PK
        string nome
        string email
        string telefone
        string endereco
    }

    CATEGORIA {
        int id_categoria PK
        string nome
    }

    PRODUTO {
        int id_produto PK
        string nome
        string descricao
        decimal preco
        int estoque
        int id_categoria FK
    }

    PEDIDO {
        int id_pedido PK
        date data_pedido
        string status
        decimal valor_total
        int id_cliente FK
    }

    ITEM_PEDIDO {
        int id_item PK
        int quantidade
        decimal preco_unitario
        decimal subtotal
        int id_pedido FK
        int id_produto FK
    }

    PAGAMENTO {
        int id_pagamento PK
        string forma_pagamento
        string status_pagamento
        date data_pagamento
        int id_pedido FK
    }