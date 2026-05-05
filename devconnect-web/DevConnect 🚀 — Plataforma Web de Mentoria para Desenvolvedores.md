# DevConnect 🚀 — Plataforma Web de Mentoria para Desenvolvedores

**DevConnect** é uma plataforma web moderna e intuitiva que transforma a experiência de mentoria técnica. Combina videoconferência de alta qualidade via **Jitsi Meet SDK** com um **Chat de Código integrado**, permitindo que mentores e estudantes colaborem em tempo real com uma interface otimizada para desenvolvedores.

---

## 📋 Índice

- [Briefing Original](#briefing-original)
- [Visão Geral](#visão-geral)
- [Problema & Solução](#problema--solução)
- [Recursos Principais](#recursos-principais)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Arquitetura](#arquitetura)
- [Roadmap](#roadmap)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## 📌 Briefing Original

### Objetivo
Desenvolver um app original de videoconferência que vá além de apenas chamadas básicas, resolvendo um problema real com foco em usabilidade, criatividade e experiência do usuário.

### Ideia do Projeto: Mentoria para Desenvolvedores
- Usuários podem criar ou entrar em salas de mentoria
- Chat integrado para envio de códigos
- Botão para compartilhar trechos de código
- Interface moderna e limpa
- Foco em aprendizado e colaboração

### Funcionalidades Obrigatórias
- ✅ Integração com o SDK do Jitsi Meet (criar e entrar em salas reais)
- ✅ Tela inicial com opção de criar ou entrar em sala
- ✅ Campo para nome da sala
- ✅ Interface simples e intuitiva
- ✅ Navegação fluida entre telas
- ✅ Tratamento de erros básicos (ex: sala inválida)
- ✅ Permissões necessárias (internet, câmera, microfone)

### Diferenciais Implementados
- ✅ Interface voltada para desenvolvedores (tema escuro estilo VS Code)
- ✅ Área de chat paralela para compartilhar código
- ✅ Botão "Copiar Código"
- ✅ Identificação de usuários na chamada
- ✅ UX otimizada (layout organizado, responsivo e moderno)

### Estrutura do Projeto
- ✅ Código organizado em padrões web modernos (React + TypeScript)
- ✅ Separação de responsabilidades (Componentes, Pages, Contexts)
- ✅ Comentários explicando as partes importantes

---

## 🎯 Visão Geral

DevConnect resolve um problema crítico na educação técnica: **plataformas de mentoria tradicionais não oferecem ferramentas integradas para visualização e compartilhamento de código durante chamadas de vídeo**. Usuários precisam alternar entre múltiplas abas e aplicativos, interrompendo o fluxo de aprendizado.

Nossa solução integra tudo em um único lugar com uma interface que respira programação — inspirada no **VS Code** com tema escuro profissional.

---

## 💡 Problema & Solução

| Aspecto | Problema | Solução DevConnect |
|:---|:---|:---|
| **Compartilhamento de Código** | Necessário usar Pastebin, GitHub ou email | Chat integrado com syntax highlighting |
| **Interface** | Genérica e cansativa visualmente | Tema VS Code escuro e otimizado para devs |
| **Colaboração** | Fragmentada em múltiplos apps | Tudo em um só lugar: vídeo + chat + código |
| **Identificação** | Difícil rastrear quem está falando | Nomes de usuário e papéis (Mentor/Estudante) |
| **Linguagens** | Sem suporte a syntax highlighting | Suporte a 12+ linguagens de programação |

---

## ✨ Recursos Principais

### 🎥 Videoconferência
- Integração com **Jitsi Meet** — servidor público confiável
- Qualidade HD com suporte a múltiplos participantes
- Compartilhamento de tela nativo
- Controles de áudio/vídeo intuitivos

### 💬 Chat de Código
- **Compartilhamento de trechos de código** com syntax highlighting
- Suporte a **12 linguagens**: JavaScript, TypeScript, Python, Java, Kotlin, Swift, Go, Rust, SQL, HTML, CSS, Bash
- Botão **"Copiar Código"** para rápida reutilização
- Mensagens de texto simples para comunicação rápida
- Timestamps automáticos em todas as mensagens

### 👤 Gerenciamento de Perfil
- Configuração de nome de exibição
- Seleção de papel: **Estudante** ou **Mentor**
- Persistência local via localStorage
- Avatar com iniciais personalizadas

### 🎨 Interface Moderna
- **Tema VS Code** — paleta One Dark Pro
- Design responsivo (desktop, tablet, mobile)
- Animações suaves e transições fluidas
- Componentes Material Design via shadcn/ui
- Tipografia profissional com JetBrains Mono

### 🏠 Gerenciamento de Salas
- **Criar sala** — Inicie uma nova sessão de mentoria
- **Entrar em sala** — Ingresse usando ID ou nome
- Identificação clara da sala ativa
- Histórico de participantes

---

## 🛠️ Tecnologias

### Frontend
- **React 19** — UI library moderna com hooks
- **TypeScript** — Type safety e melhor DX
- **Vite** — Build tool ultrarrápido
- **Tailwind CSS 4** — Utility-first styling
- **shadcn/ui** — Componentes acessíveis e customizáveis
- **Wouter** — Roteamento leve e eficiente
- **Lucide React** — Ícones vetoriais de qualidade

### Integração de Vídeo
- **Jitsi Meet External API** — Videoconferência sem servidor próprio
- Servidor público: `https://meet.jit.si`

### Persistência
- **localStorage** — Perfil e preferências do usuário
- Estado local com React hooks (useState, useEffect)

### Desenvolvimento
- **Node.js 22.13.0** — Runtime JavaScript
- **pnpm** — Package manager rápido
- **ESLint & Prettier** — Code quality

---

## 📦 Instalação

### Pré-requisitos
- **Node.js 18+** (recomendado 22.13.0)
- **pnpm 10+** ou npm/yarn
- Navegador moderno (Chrome, Firefox, Safari, Edge)

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/devconnect-web.git
   cd devconnect-web
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   pnpm dev
   # ou
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

### Build para Produção

```bash
pnpm build
# ou
npm run build
```

Arquivos otimizados serão gerados em `dist/`.

---

## 🚀 Como Usar

### 1️⃣ Configurar Perfil
- Clique na aba **"Perfil"**
- Digite seu nome de exibição
- Escolha seu papel: **Estudante** ou **Mentor**
- As configurações são salvas automaticamente

### 2️⃣ Criar uma Sala
- Na aba **"Início"**, clique em **"Criar Sala"**
- Digite um nome descritivo (ex: `kotlin-avancado`)
- Clique em **"Criar Sala"**
- A videoconferência abrirá automaticamente

### 3️⃣ Entrar em uma Sala Existente
- Na aba **"Início"**, clique em **"Entrar em Sala"**
- Digite o ID ou nome da sala
- Clique em **"Entrar"**

### 4️⃣ Usar o Chat de Código
- Na barra lateral direita, você verá o **Chat da Sessão**
- **Enviar mensagem**: Digite na caixa de entrada e pressione Enter
- **Compartilhar código**:
  1. Clique no ícone `</>`
  2. Selecione a linguagem de programação
  3. Cole seu código
  4. Clique em **"Enviar Código"**
- **Copiar código**: Clique no botão "Copiar" em qualquer bloco de código

### 5️⃣ Sair da Sala
- Clique em **"Sair da Sala"** na barra superior
- Você retornará à tela inicial

---

## 📁 Estrutura do Projeto

```
devconnect-web/
├── client/
│   ├── public/                 # Arquivos estáticos (favicon, robots.txt)
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/            # Componentes shadcn/ui
│   │   │   ├── JitsiMeet.tsx  # Integração com Jitsi
│   │   │   ├── ChatPanel.tsx  # Chat de código
│   │   │   └── ...
│   │   ├── pages/
│   │   │   └── Home.tsx       # Página principal
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx # Gerenciamento de tema
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utilitários
│   │   ├── App.tsx            # Roteamento principal
│   │   ├── main.tsx           # Entry point React
│   │   └── index.css          # Estilos globais + Tailwind
│   └── index.html             # Template HTML
├── server/                     # Placeholder (static-only)
├── package.json               # Dependências e scripts
├── tsconfig.json              # Configuração TypeScript
├── tailwind.config.js         # Configuração Tailwind
├── vite.config.ts             # Configuração Vite
└── README.md                  # Este arquivo
```

---

## 🏗️ Arquitetura

### Fluxo de Dados

```
┌─────────────────────────────────────────────────────┐
│                    DevConnect Web                    │
├─────────────────────────────────────────────────────┤
│                                                       │
│  ┌──────────────┐         ┌──────────────┐          │
│  │   Home Page  │◄────────┤ Theme Context│          │
│  └──────────────┘         └──────────────┘          │
│         │                                             │
│         ├─► Criar/Entrar Sala                        │
│         │                                             │
│         └─► MentorRoomView                           │
│              │                                        │
│              ├─► JitsiMeet Component                 │
│              │   (Videoconferência)                  │
│              │                                        │
│              └─► ChatPanel Component                 │
│                  ├─ Mensagens de Texto               │
│                  ├─ Blocos de Código                 │
│                  └─ localStorage (Perfil)            │
│                                                       │
└─────────────────────────────────────────────────────┘
```

### Componentes Principais

| Componente | Responsabilidade |
|:---|:---|
| `Home.tsx` | Tela inicial, criação/entrada em salas, perfil |
| `JitsiMeet.tsx` | Integração com Jitsi Meet SDK |
| `ChatPanel.tsx` | Chat de mensagens e código |
| `ThemeContext.tsx` | Gerenciamento de tema (dark/light) |

---

## 🎨 Paleta de Cores (VS Code)

```css
/* Cores principais */
--primary: oklch(0.55 0.2 259);        /* Azul VS Code */
--secondary: oklch(0.55 0.18 280);     /* Roxo */
--destructive: oklch(0.60 0.18 15);    /* Vermelho */
--background: oklch(0.141 0.005 285);  /* Preto profundo */
--card: oklch(0.21 0.006 285);         /* Cinza escuro */
--foreground: oklch(0.85 0.005 65);    /* Branco/Cinza claro */
```

---

## 🚦 Roadmap

### ✅ Concluído
- [x] Interface Dashboard com tema VS Code
- [x] Integração com Jitsi Meet
- [x] Chat de código com syntax highlighting
- [x] Gerenciamento de perfil
- [x] Responsividade mobile

### 🔄 Em Desenvolvimento
- [ ] Persistência de mensagens (Backend)
- [ ] Notificações em tempo real (WebSockets)
- [ ] Gravação de sessões
- [ ] Histórico de salas
- [ ] Sistema de avaliação/feedback

### 📋 Planejado
- [ ] Autenticação com OAuth
- [ ] Integração com GitHub
- [ ] Compartilhamento de tela melhorado
- [ ] Suporte a múltiplas linguagens de UI
- [ ] Dark/Light theme toggle
- [ ] Exportar transcrição de chat

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o repositório
2. **Crie uma branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### Padrões de Código
- Use **TypeScript** para type safety
- Siga o estilo **Prettier** (rodado automaticamente)
- Componentes em **PascalCase**, arquivos em **camelCase**
- Adicione comentários para lógica complexa

---

## 📝 Licença

Este projeto está licenciado sob a **MIT License** — veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 📞 Suporte

- **Issues**: [GitHub Issues](https://github.com/seu-usuario/devconnect-web/issues)
- **Discussões**: [GitHub Discussions](https://github.com/seu-usuario/devconnect-web/discussions)
- **Email**: seu-email@exemplo.com

---

## 🙏 Agradecimentos

- **Jitsi Meet** — Pela excelente infraestrutura de videoconferência
- **shadcn/ui** — Componentes acessíveis e customizáveis
- **Tailwind CSS** — Styling utilities de classe
- **React Community** — Ferramentas e inspiração

---

## 🎓 Sobre o Projeto

**DevConnect** foi desenvolvido como um projeto acadêmico de nível profissional, demonstrando:
- Arquitetura de componentes React moderna
- Integração com APIs externas (Jitsi Meet)
- Design system coeso com tema escuro
- UX otimizada para desenvolvedores
- Boas práticas de desenvolvimento web

**Desenvolvido com ❤️ para a comunidade de desenvolvedores.**

---

## 📊 Estatísticas

- **Linguagens de Programação Suportadas**: 12
- **Componentes UI**: 20+
- **Linhas de Código**: ~2000
- **Tempo de Desenvolvimento**: Otimizado para máxima produtividade

---

**Última atualização**: Maio de 2026  
**Versão**: 1.0.0  
**Status**: ✅ Pronto para Produção
