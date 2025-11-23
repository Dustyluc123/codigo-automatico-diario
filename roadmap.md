
[DOC] - Tarefa Concluída:## Roadmap do Projeto E-commerce

Esta seção descreve as próximas etapas e o progresso do desenvolvimento.

### Tarefas Concluídas:

*   **Modificar o arquivo `script.js`. Declare um array vazio chamado `cart` no escopo global para armazenar os produtos. Adicione um manipulador de eventos (event listener) aos botões 'Adicionar ao Carrinho' (você pode fazer isso dentro da função `renderProducts` ou usando delegação de eventos no container de produtos). Ao clicar em um botão, a função associada deve identificar o produto (usando um atributo como `data-id`), encontrar o objeto do produto correspondente no array `products` e adicioná-lo ao array `cart`. Por fim, exiba o conteúdo do `cart` no console para verificar se a adição foi bem-sucedida.** - **CONCLUÍDA**

### Próximas Tarefas:

*   **Implementar a exibição visual do carrinho.** Crie uma nova seção no HTML (assuma que existe um elemento com `id="cart-items"`) para listar os itens do `cart` e um elemento para exibir o total (`id="cart-total"`). Crie uma função `renderCart` que itera sobre o array `cart` e gera a lista de itens, incluindo nome do produto, preço e quantidade. Atualize também o preço total do carrinho. Chame `renderCart` sempre que um item for adicionado ao `cart` (ou removido, se implementarmos isso mais tarde).
*   Adicionar funcionalidade para remover itens do carrinho.
*   Implementar a funcionalidade de atualizar a quantidade de itens no carrinho.
*   Desenvolver a página de checkout (formulário de endereço, pagamento).
*   Integrar com uma API de backend para gerenciar produtos e pedidos.
*   Adicionar autenticação de usuário.
*   Implementar filtros e busca de produtos.
