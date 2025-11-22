
[DOC] - Tarefa Concluída:## Roadmap do Projeto de Sistema de Pedidos

### Fase 1: Modelagem de Dados Essencial

- [CONCLUÍDA] Crie o arquivo 'pedidos/models.py' e defina os modelos de dados essenciais para o sistema de pedidos. Crie o modelo 'Pedido', que deve ter uma chave estrangeira para o usuário (User), um campo para o status do pedido (ex: 'Pendente', 'Pago', 'Enviado'), e a data de criação. Crie também o modelo 'ItemPedido', que deve ter uma chave estrangeira para 'Pedido', uma chave estrangeira para o 'Produto' correspondente, a quantidade, e o preço do item no momento da compra.
- [ ] Crie o arquivo 'produtos/models.py' e defina o modelo 'Produto' com campos essenciais como nome, descrição, preço e estoque. Adicione também uma chave estrangeira para a categoria do produto (se houver, crie um modelo 'CategoriaProduto' simples).