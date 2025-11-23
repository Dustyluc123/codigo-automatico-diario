
[DOC] - Tarefa Concluída:Roadmap de Desenvolvimento para Aplicação de Carrinho de Compras

- [X] Tarefa 1: Configuração Inicial do Projeto
  - Criar estrutura básica de arquivos (index.html, script.js, style.css).
  - Adicionar um título simples ao `index.html`.
  - Vincular `script.js` e `style.css` ao `index.html`.

- [X] Tarefa 2: Implementar a Lógica de Renderização do Carrinho
  - Crie uma função chamada `renderCart`.
  - Localizar os containers dos itens do carrinho (`#cart-items`) e o total (`#cart-total`).
  - Limpar conteúdo existente.
  - Iterar sobre o array global `cart` para exibir nome e preço dos produtos.
  - Calcular e exibir a soma total formatada.
  - Modificar a função `addItemToCart` (ou similar) para chamar `renderCart()` após adicionar um item.
  - **Status: CONCLUÍDA**

- [ ] Tarefa 3: Adicionar Funcionalidade de Remover Itens e Ajustar Quantidade
  - Modificar a função `renderCart` para incluir botões "Remover" e controles de "Quantidade" (aumentar/diminuir) para cada item do carrinho.
  - Criar funções `removeItemFromCart(productId)` e `updateItemQuantity(productId, newQuantity)` para manipular o array `cart`.
  - Certificar-se de que `renderCart()` é chamado após cada modificação do carrinho.
