# OrçaFácil - Sistema de Gestão de Orçamentos no Bubble

## Descrição

O OrçaFácil é uma aplicação web simples para gestão de clientes e orçamentos, criada com o auxílio da Inteligência Artificial do Bubble e revisada manualmente com foco em fundamentos de engenharia de software.

## Link da aplicação

https://pedrolucasp503-73718.bubbleapps.io/version-test?debug_mode=true

## Funcionalidades

- Cadastro e login de usuários.
- Dashboard com indicadores principais.
- Cadastro, visualização e organização de clientes.
- Cadastro e acompanhamento de orçamentos.
- Status de orçamento por Option Set: Pendente, Aprovado e Rejeitado.
- Regras de privacidade para isolamento de dados por usuário.

## Modelagem de dados

### User
- name
- email
- owner

### Client
- name
- email
- phone
- owner

### Budget
- title
- description
- value
- client
- status
- owner

## Segurança e privacidade

Foram configuradas Privacy Rules no Bubble para impedir que um usuário visualize os dados criados por outro usuário.

Regras principais:

- User: This User is Current User
- Client: This Client's owner is Current User
- Budget: This Budget's owner is Current User

## Option Sets

Foi criado o Option Set `StatusBudget`, evitando o uso de textos fixos no sistema.

Opções:

- Pendente
- Aprovado
- Rejeitado

## Governança

Os workflows foram renomeados para facilitar manutenção e leitura, com notes explicando a função dos principais fluxos.

## Estratégia de saída

Caso o sistema precise ser migrado futuramente, os dados poderão ser exportados utilizando a Data API do Bubble em formato JSON. Dessa forma, será possível reutilizar as informações em aplicações desenvolvidas em tecnologias tradicionais, como React, Node.js e bancos de dados SQL.
