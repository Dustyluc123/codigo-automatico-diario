# Roadmap Inicial do Projeto E-commerce

Este documento descreve as fases iniciais e os épicos principais para o desenvolvimento de nossa plataforma de e-commerce. O objetivo é estabelecer uma base sólida para as funcionalidades essenciais e permitir iterações futuras.

## Fases/Épicos Principais

### 1. Configuração do Ambiente e Estrutura do Projeto
**Objetivo:** Estabelecer o ambiente de desenvolvimento, definir a estrutura básica do projeto e configurar ferramentas essenciais.
**Tarefas Chave:**
*   Escolha da stack tecnológica (backend, frontend, banco de dados).
*   Configuração de repositório Git.
*   Criação da estrutura de pastas inicial para backend e frontend.
*   Configuração de ambiente de desenvolvimento local (Docker, virtual env, etc.).
*   Setup de linters, formatadores e testes unitários básicos.
*   Configuração de CI/CD inicial (opcional, mas recomendado).

### 2. Modelagem do Banco de Dados (Usuário, Produto)
**Objetivo:** Projetar e implementar os modelos de dados fundamentais para usuários e produtos.
**Tarefas Chave:**
*   Definição do schema para a entidade `Usuário` (id, nome, email, senha hash, roles, etc.).
*   Definição do schema para a entidade `Produto` (id, nome, descrição, preço, estoque, imagens, categoria, etc.).
*   Criação das migrations para o banco de dados escolhido.
*   Implementação dos modelos ORM correspondentes.

### 3. API de Produtos (Listagem, Detalhes)
**Objetivo:** Desenvolver os endpoints da API para listar e exibir detalhes de produtos.
**Tarefas Chave:**
*   Criação dos endpoints RESTful para `/api/products` (GET para listagem).
*   Criação dos endpoints RESTful para `/api/products/{id}` (GET para detalhes).
*   Implementação da lógica de busca e filtragem básica para produtos.
*   Desenvolvimento de testes unitários e de integração para os endpoints da API de produtos.
*   Documentação básica da API (ex: Swagger/OpenAPI).

### 4. Frontend Básico (Templates e Estilos)
**Objetivo:** Desenvolver as interfaces de usuário mínimas para exibir produtos.
**Tarefas Chave:**
*   Configuração do framework frontend (React, Vue, Angular ou SSR com template engine).
*   Criação de componentes/templates para a lista de produtos.
*   Criação de componentes/templates para a página de detalhes do produto.
*   Aplicação de estilos CSS básicos para usabilidade e consistência visual.
*   Integração com a API de produtos para exibir os dados.

### 5. Autenticação de Usuários
**Objetivo:** Implementar o sistema de registro e login de usuários.
**Tarefas Chave:**
*   Criação de endpoints da API para registro (`/api/auth/register`).
*   Criação de endpoints da API para login (`/api/auth/login`).
*   Implementação de hashing de senhas e JWT (JSON Web Tokens) ou sessão para autenticação.
*   Desenvolvimento de formulários de registro e login no frontend.
*   Implementação de proteção de rotas/recursos.
*   Criação de endpoint para perfil do usuário (`/api/auth/me`).

### 6. Funcionalidade do Carrinho de Compras
**Objetivo:** Permitir que os usuários adicionem, removam e visualizem itens no carrinho de compras.
**Tarefas Chave:**
*   Definição do schema para a entidade `Carrinho` e `ItemCarrinho`.
*   Criação de endpoints da API para:
    *   Adicionar produto ao carrinho (`POST /api/cart`).
    *   Atualizar quantidade de item no carrinho (`PUT /api/cart/{productId}`).
    *   Remover item do carrinho (`DELETE /api/cart/{productId}`).
    *   Visualizar carrinho (`GET /api/cart`).
*   Implementação da lógica de persistência do carrinho (session, banco de dados para usuários logados).
*   Desenvolvimento de interface de usuário para o carrinho de compras (exibir itens, quantidades, total).

---
## Status Atual do Projeto
*   **Definição do Roadmap Inicial:** PENDENTE