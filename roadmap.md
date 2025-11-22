
[DOC] - Tarefa Concluída:### Roadmap de Desenvolvimento - Aplicação de Produtos

Este roadmap descreve as principais tarefas a serem desenvolvidas para a criação da API de produtos.

---

**App: `produtos`**

*   **Modelos:**
    *   Criar o modelo `CategoriaProduto` com campos para nome e descrição.
    *   Criar o modelo `Produto` com campos para nome, descrição, preço, estoque, e uma chave estrangeira para `CategoriaProduto`.
    *   Configurar o `admin.py` para registrar os modelos `CategoriaProduto` e `Produto`.

*   **Serializers:**
    *   **[CONCLUÍDA]** Criar o arquivo `serializers.py` no app `produtos` e implementar o `CategoriaProdutoSerializer` usando `ModelSerializer` para converter o modelo `CategoriaProduto` em dados JSON, incluindo todos os seus campos.
    *   **[PRÓXIMA]** Implementar o `ProdutoSerializer` no arquivo `produtos/serializers.py` para serializar o modelo `Produto`, incluindo campos de relacionamento (e.g., a categoria). Definir campos específicos ou usar `__all__` conforme necessário e adicionar validações básicas.

*   **Views:**
    *   Implementar `CategoriaProdutoListCreateAPIView` e `CategoriaProdutoRetrieveUpdateDestroyAPIView` usando `generics` do DRF para as operações CRUD de `CategoriaProduto`.
    *   Implementar `ProdutoListCreateAPIView` e `ProdutoRetrieveUpdateDestroyAPIView` usando `generics` do DRF para as operações CRUD de `Produto`.
    *   Considerar a criação de uma view para listar produtos por categoria.

*   **URLs:**
    *   Configurar os arquivos `urls.py` do app `produtos` para mapear as URLs para as views criadas.
    *   Incluir as URLs do app `produtos` no arquivo `urls.py` do projeto principal.

*   **Testes (Opcional, mas recomendado):**
    *   Escrever testes unitários e de integração para os modelos, serializers e views.

---

**Próximos Passos Gerais:**

1.  Revisão e refatoração do código.
2.  Documentação da API (e.g., com `drf-yasg` ou `Swagger`).
3.  Configuração de ambiente de produção (se aplicável).