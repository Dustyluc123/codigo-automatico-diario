
[DOC] - Tarefa Concluída:## Roadmap do Projeto

### Fase 1: Configuração Inicial do Projeto Django

- [CONCLUÍDA] No arquivo de URLs principal do projeto (ex: `meuprojeto/urls.py`), importe a função `include` de `django.urls` e adicione um novo `path` à lista `urlpatterns`. Este `path` deve direcionar todas as URLs que começam com 'pedidos/' para serem gerenciadas pelo arquivo `pedidos.urls`. Exemplo: `path('pedidos/', include('pedidos.urls'))`.
- [ ] Crie o arquivo `pedidos/urls.py` e adicione uma URL de exemplo que mapeie para uma view de 'index'.