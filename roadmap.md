# Roadmap do Projeto de E-commerce

Este documento descreve o plano de alto nível e as principais fases de desenvolvimento para o nosso projeto de e-commerce. Ele servirá como um guia para o progresso da equipe e a comunicação com as partes interessadas.

---

### Visão Geral

Nosso objetivo é construir uma plataforma de e-commerce robusta, escalável e fácil de usar, permitindo aos clientes navegar por produtos, gerenciar um carrinho de compras, realizar checkouts seguros e para os administradores, gerenciar o catálogo e pedidos.

---

### Fases do Desenvolvimento

#### Fase 1: Setup e Modelos Core (Projeto, Usuário, Produto)
*   **Objetivo:** Estabelecer a base do projeto, configurar o ambiente de desenvolvimento e definir os modelos de dados essenciais.
*   **Itens-chave:**
    *   **Configuração do Ambiente:**
        *   Inicialização do projeto (escolha de frameworks: ex. Next.js para frontend, Node.js/Express ou Python/Django/Flask para backend, PostgreSQL/MongoDB para DB).
        *   Configuração de versionamento de código (Git).
        *   Estrutura de pastas e arquivos inicial.
        *   Configuração de ferramentas de desenvolvimento (linting, prettier).
        *   Integração inicial de CI/CD (ex. GitHub Actions/GitLab CI).
    *   **Modelos de Dados Essenciais:**
        *   **Projeto/Configuração Global:** Definição da estrutura de banco de dados e ORM/ODM. Modelo de configurações globais da loja (nome, moeda, fuso horário).
        *   **Usuário:** Campos: ID, email, senha (hashed), nome, sobrenome, endereços (separado ou embutido), roles (cliente, admin). Definição de relacionamentos.
        *   **Produto:** Campos: ID, nome, descrição, preço, SKU, estoque, categoria, imagens (URL/referência), atributos (tamanho, cor), data de criação/atualização. Definição de relacionamentos.
    *   **Primeiros Endpoints (CRUD básico):** Criação de APIs RESTful básicas para `Produto` (GET all, GET by ID). Testes básicos para validação.
*   **Entregáveis:** Projeto inicial configurado, modelos de dados definidos e migrações aplicadas, primeiros endpoints de produto funcionando.

#### Fase 2: Catálogo de Produtos (Listagem e Detalhes)
*   **Objetivo:** Desenvolver a funcionalidade de listagem e visualização detalhada dos produtos para os usuários.
*   **Itens-chave:**
    *   **Backend:** Endpoints para listar produtos com paginação, filtros (por categoria, preço, atributos) e busca. Endpoint para obter detalhes de um produto específico (incluindo variantes, imagens, descrições completas).
    *   **Frontend:** Página de listagem de produtos (grid/lista view) com componentes de filtro, busca e paginação. Página de detalhes do produto: exibir imagens, nome, preço, descrição, opções de variantes, quantidade, botão "Adicionar ao Carrinho".
*   **Entregáveis:** Páginas de listagem e detalhes de produtos funcionais, com interação básica do usuário para navegação e visualização.

#### Fase 3: Carrinho de Compras
*   **Objetivo:** Implementar a funcionalidade de adicionar, remover e gerenciar itens no carrinho de compras.
*   **Itens-chave:**
    *   **Backend:** Modelo `Carrinho` e `ItemCarrinho` (relacionado ao produto e usuário/sessão). Endpoints: adicionar, remover, atualizar quantidade de item, obter conteúdo do carrinho. Gerenciamento de carrinho para usuários não autenticados (usando cookies/session ID).
    *   **Frontend:** Botão "Adicionar ao Carrinho". Componente de visualização do carrinho (ícone no header com contador). Página do carrinho de compras: listar itens, exibir detalhes, ajustar quantidades, remover itens, subtotal e total.
*   **Entregáveis:** Funcionalidade completa de carrinho de compras, permitindo ao usuário gerenciar seus itens antes do checkout.

#### Fase 4: Checkout
*   **Objetivo:** Desenvolver o processo de finalização da compra, incluindo informações de entrega e pagamento.
*   **Itens-chave:**
    *   **Backend:** Modelo `Pedido` e `ItemPedido`. Endpoints: criação de pedido a partir do carrinho, processamento de informações de entrega, integração com gateway de pagamento (ex. Stripe, PayPal, PagSeguro), atualização de estoque, gerenciamento de status do pedido.
    *   **Frontend:** Fluxo de checkout multi-passos: resumo do carrinho, informações de entrega (endereços), seleção do método de envio, informações de pagamento (formulário via gateway), revisão do pedido e confirmação. Página de confirmação de pedido.
*   **Entregáveis:** Processo de checkout completo e funcional, com integração básica de pagamento.

#### Fase 5: Autenticação e Contas de Usuário
*   **Objetivo:** Implementar o sistema de autenticação, registro e gerenciamento de perfis de usuário.
*   **Itens-chave:**
    *   **Backend:** Endpoints para Registro, Login (geração de JWT ou tokens de sessão), Logout, Redefinição de Senha. Endpoints para gerenciamento do perfil do usuário (atualizar dados, endereços). Proteção de rotas com middleware de autenticação. Associação de carrinho (de sessão) ao usuário autenticado.
    *   **Frontend:** Páginas de Registro, Login. Funcionalidade de "Esqueci a Senha". Página de Perfil do Usuário: visualização/edição de informações pessoais, gerenciamento de endereços, histórico de pedidos. Atualização da UI para refletir o status de autenticação.
*   **Entregáveis:** Sistema de autenticação e registro completo, com painel de usuário para gerenciamento de perfil e histórico de pedidos.

#### Fase 6: Painel Administrativo
*   **Objetivo:** Desenvolver uma interface para administradores gerenciarem produtos, pedidos, usuários e configurações da loja.
*   **Itens-chave:**
    *   **Backend:** Implementação de roles/permissões (admin vs. cliente). Endpoints CRUD para Produtos (adicionar, editar, remover, gerenciar estoque, variantes, imagens), Categorias de Produtos, Pedidos (visualizar detalhes, atualizar status), Usuários. Proteção de rotas administrativas.
    *   **Frontend:** Painel de login específico para administradores. Dashboard administrativo com visão geral. Seção de Gerenciamento de Produtos: tabela com listagem, busca, filtros, formulário para adicionar/editar produtos (com upload de imagens). Seção de Gerenciamento de Pedidos: tabela de pedidos, busca, filtros, página de detalhes do pedido. Seção de Gerenciamento de Usuários (básico).
*   **Entregáveis:** Painel administrativo funcional, permitindo a gestão essencial da loja por parte dos administradores.

---

Este roadmap é um documento vivo e será atualizado conforme o projeto evolui.