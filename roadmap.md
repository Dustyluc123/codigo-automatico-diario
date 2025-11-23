
[DOC] - Tarefa Concluída:# Roadmap do Projeto E-commerce

Este roadmap descreve as principais etapas para construir a aplicação de e-commerce.

## Fase 1: Configuração Inicial e Estrutura Básica

- [X] Inicializar o projeto React com Vite.
- [X] Instalar dependências essenciais (ex: `react-router-dom`).
- [CONCLUÍDA] Crie um novo componente React chamado `Layout` em `src/components/Layout.jsx`. Este componente servirá como a estrutura visual principal da aplicação. Ele deve incluir: 1. Um elemento `<header>` para o cabeçalho. 2. Um elemento `<footer>` para o rodapé. 3. Um menu de navegação (`<nav>`) contendo links (`<Link>` do `react-router-dom`) para as rotas: Home ('/'), Produtos ('/produtos') e Carrinho ('/carrinho'). 4. O componente `<Outlet />` do `react-router-dom` para renderizar o conteúdo da rota ativa entre o cabeçalho e o rodapé.

## Próximas Tarefas:

- [ ] Configure as rotas principais da aplicação em `src/App.jsx` utilizando `react-router-dom` e o componente `Layout`. Crie rotas para Home, Produtos e Carrinho como rotas filhas do `Layout`.
- [ ] Crie os componentes de página para Home (`src/pages/HomePage.jsx`), Produtos (`src/pages/ProductsPage.jsx`) e Carrinho (`src/pages/CartPage.jsx`) com conteúdo básico.
- [ ] Implementar um componente de listagem de produtos.
- [ ] Configurar um estado global simples para o carrinho de compras.
