# Roadmap do Projeto E-commerce

Este documento descreve o plano de alto nível para o desenvolvimento de um novo projeto de e-commerce, abordando a visão do produto, a stack de tecnologia inicial, as funcionalidades do MVP e as fases macro de desenvolvimento.

## 1. Visão do Produto

Nosso objetivo é construir uma plataforma de e-commerce moderna e escalável, focada em proporcionar uma experiência de compra intuitiva e eficiente para os usuários, ao mesmo tempo em que oferece uma interface de administração robusta para o gerenciamento de produtos, pedidos e clientes. A plataforma permitirá que usuários naveguem por um catálogo de produtos, adicionem itens ao carrinho, finalizem a compra através de um checkout seguro e acompanhem seus pedidos.

## 2. Stack de Tecnologia

A decisão inicial da stack de tecnologia visa otimizar o tempo de desenvolvimento, garantir escalabilidade, segurança e facilitar a manutenção a longo prazo.

*   **Backend:** Python com Django REST Framework
    *   **Justificativa:** Django é um framework web robusto, seguro e com "baterias inclusas", ideal para desenvolvimento rápido. O Django REST Framework simplifica a criação de APIs RESTful. Sua vasta comunidade e ecossistema garantem suporte e soluções para diversos desafios. O admin do Django acelera a criação de dashboards de gerenciamento.
*   **Frontend:** React (com Next.js)
    *   **Justificativa:** React é uma biblioteca JavaScript popular para construção de interfaces de usuário dinâmicas e reativas. A inclusão do Next.js permite Server-Side Rendering (SSR) para melhor SEO e performance inicial, além de otimizações de bundle e uma experiência de desenvolvimento aprimorada.
*   **Banco de Dados:** PostgreSQL
    *   **Justificativa:** PostgreSQL é um sistema de banco de dados relacional de código aberto, altamente confiável, escalável e rico em recursos, sendo uma escolha natural para aplicações de grande porte e compatível nativamente com o ORM do Django.
*   **Cache/Filas:** Redis
    *   **Justificativa:** Utilizado para cache de dados (otimizando a performance), gerenciamento de sessões e como broker para filas de tarefas assíncronas (ex: processamento de imagens, envio de e-mails).
*   **Orquestração/Containerização:** Docker, Docker Compose (desenvolvimento/staging)
    *   **Justificativa:** Garante ambientes de desenvolvimento e produção consistentes, facilita o deploy e o gerenciamento de dependências.
*   **Cloud Provider (Futuro):** AWS / Google Cloud / Azure
    *   **Justificativa:** Para escalabilidade, infraestrutura gerenciada e serviços adicionais em produção.

## 3. MVP (Produto Mínimo Viável)

O MVP terá como foco as funcionalidades essenciais para que um usuário possa realizar uma compra completa na plataforma. A meta é lançar com o mínimo de funcionalidades para validar o conceito e coletar feedback.

*   **Autenticação e Gestão de Usuários:**
    *   Cadastro de novos usuários.
    *   Login/Logout de usuários.
    *   Recuperação de senha.
    *   Perfil do usuário (visualização básica).
*   **Catálogo de Produtos:**
    *   Listagem de produtos (com imagem, nome, preço).
    *   Página de detalhes do produto (descrição, mais imagens).
    *   Busca simples por nome de produto.
*   **Carrinho de Compras:**
    *   Adicionar/remover produtos do carrinho.
    *   Atualizar quantidade de itens no carrinho.
    *   Visualização do carrinho com subtotal.
*   **Checkout Básico:**
    *   Preenchimento de endereço de entrega.
    *   Seleção de método de pagamento (simulado, sem integração real em v1).
    *   Confirmação e criação de pedido.
*   **Página de Pedidos:**
    *   Listagem dos pedidos realizados pelo usuário.

## 4. Fases do Projeto

O desenvolvimento será dividido nas seguintes fases macro:

*   **Fase 1: Setup e Infraestrutura Base**
    *   Configuração do ambiente de desenvolvimento (Docker Compose).
    *   Estrutura inicial dos projetos (Django e Next.js).
    *   Configuração de banco de dados e migrações iniciais.
    *   Configuração básica de CI/CD para integração contínua.
*   **Fase 2: Autenticação e Autorização**
    *   Implementação dos modelos de usuário e APIs de autenticação (cadastro, login, logout, refresh token).
    *   Integração do fluxo de autenticação no frontend.
*   **Fase 3: Módulo de Produtos e Categorias**
    *   Implementação dos modelos de Produto, Categoria, Imagem de Produto.
    *   APIs para CRUD de produtos (para o admin) e listagem/detalhes para o público.
    *   Desenvolvimento das páginas de listagem e detalhes de produto no frontend.
*   **Fase 4: Carrinho de Compras**
    *   Implementação dos modelos e APIs para gerenciar o carrinho de compras (adicionar, remover, atualizar itens).
    *   Desenvolvimento da interface do carrinho no frontend.
*   **Fase 5: Checkout e Gerenciamento de Pedidos**
    *   Implementação dos modelos de Pedido, Item de Pedido, Endereço.
    *   APIs para criação de pedidos e listagem de histórico de pedidos.
    *   Desenvolvimento do fluxo de checkout no frontend (endereço, resumo do pedido, confirmação).
*   **Fase 6: Admin Panel Básico**
    *   Configuração do Django Admin para gerenciar produtos, categorias, usuários e pedidos.
*   **Fase 7: Deploy Inicial, Testes e Refinamentos**
    *   Configuração de ambiente de staging e produção.
    *   Realização de testes de integração e end-to-end.
    *   Otimizações de performance e segurança.
    *   Preparação para o lançamento do MVP.
