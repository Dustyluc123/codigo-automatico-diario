
[DOC] - Tarefa Concluída:# Roadmap do Projeto E-commerce Django REST

Este roadmap descreve as fases e tarefas principais para o desenvolvimento do projeto de e-commerce utilizando Django e Django REST Framework.

## Fase 1 - Configuração Inicial do Projeto
- [x] Criação do projeto Django.
- [x] Configuração do ambiente virtual.
- [x] Instalação das dependências básicas (Django, Pillow).
- [x] Criação das aplicações `core`, `produtos`, `clientes`, `pedidos`.
- [x] Configuração inicial do banco de dados (SQLite para desenvolvimento).
- [x] Definição dos modelos iniciais para `Produto`, `Categoria`, `Cliente` e `Pedido`.
- [x] Aplicação das migrações iniciais.
- [x] Criação de um superusuário.

## Fase 2 - Desenvolvimento da API (CRUD e Autenticação)
- [x] **1. Instalação e Configuração do Django REST Framework (DRF):**
    - [x] Adicionar `djangorestframework` ao `requirements.txt`.
    - [x] Configurar `rest_framework` no `settings.py` em `INSTALLED_APPS`.
- [x] **2. Criação de Serializers:**
    - [x] Desenvolver `serializers.py` para os modelos `Produto`, `Categoria` e `Cliente/Usuário`.
    - [x] Implementar `ModelSerializer` para converter objetos do Django em representações JSON e vice-versa.
- [x] **3. Desenvolvimento das Views/ViewSets da API:**
    - [x] Implementar `ViewSets` ou `APIViews` para `Produto`, `Categoria` e `Cliente`.
    - [x] Garantir a lógica CRUD (Create, Read, Update, Delete) para cada recurso.
    - [x] Utilizar classes genéricas do DRF quando apropriado (`ModelViewSet`).
- [x] **4. Configuração de Rotas (URLs):**
    - [x] Mapear as URLs da API para as `ViewSets` criadas.
    - [x] Utilizar o `DefaultRouter` do DRF para gerar automaticamente as rotas CRUD.
    - [x] Definir um namespace para as URLs da API.
- [x] **5. Implementação da Autenticação via Token (JWT):**
    - [x] Instalar `djangorestframework-simplejwt`.
    - [x] Configurar `simplejwt` no `settings.py` e adicionar `JWTAuthentication` à classe de autenticação padrão.
    - [x] Definir rotas para obtenção de tokens (`/api/token/`) e atualização de tokens (`/api/token/refresh/`).
    - [x] Proteger os endpoints da API usando permissões (`IsAuthenticated`).

## Fase 3 - Gerenciamento de Pedidos e Carrinho de Compras
- [ ] 1. Desenvolvimento dos Modelos de Pedido e Item de Pedido.
- [ ] 2. Implementação da lógica de Carrinho de Compras (adicionar, remover, atualizar).
- [ ] 3. Criação de Endpoints da API para Pedidos e Itens de Carrinho.
- [ ] 4. Gerenciamento de Status de Pedido.

## Fase 4 - ...
