
[DOC] - Tarefa Concluída:## Roadmap do Projeto de E-commerce

Este roadmap descreve as principais tarefas para o desenvolvimento do nosso site de e-commerce.

### Fase 1: Estrutura Básica e Conteúdo Estático

- [X] No arquivo `index.html`, antes da seção do carrinho, crie uma nova seção para a listagem de produtos. Dentro desta seção, adicione manualmente pelo menos dois cards de produtos estáticos para servirem de exemplo. Cada card deve conter o nome do produto, preço e um botão 'Adicionar ao Carrinho'. É crucial que cada botão tenha 'data attributes' para o ID, nome e preço do produto (ex: data-id='1', data-name='Produto A', data-price='50.00'), para que a lógica de adicionar ao carrinho possa ser implementada no `script.js` a seguir. - **CONCLUÍDA**
- [ ] Crie o arquivo `style.css` para estilizar a página, incluindo layout responsivo para os cards de produtos e a seção do carrinho.
- [ ] No arquivo `script.js`, implemente a lógica para adicionar produtos ao carrinho. Isso deve incluir a leitura dos 'data attributes' dos botões, a criação de um array para armazenar os itens do carrinho e a atualização do DOM para exibir os itens no carrinho.
- [ ] No `script.js`, adicione a funcionalidade para remover itens do carrinho e atualizar o total.

### Fase 2: Interatividade e Melhorias

- [ ] Implementar a persistência do carrinho utilizando `localStorage`.
- [ ] Adicionar funcionalidade de busca e filtragem de produtos.
- [ ] Criar uma página de detalhes do produto.

### Fase 3: Backend e Pagamento (Futuro)

- [ ] Desenvolver API RESTful para gerenciamento de produtos e pedidos.
- [ ] Integrar com um gateway de pagamento.
- [ ] Implementar sistema de autenticação de usuários.
