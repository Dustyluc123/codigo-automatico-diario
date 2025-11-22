from django.db import models
from django.utils import timezone
from django.db.models.signals import post_delete
from django.dispatch import receiver

# Modelo Cliente: Para representar os clientes que fazem pedidos
class Cliente(models.Model):
    nome = models.CharField(max_length=200, verbose_name="Nome Completo")
    email = models.EmailField(unique=True, verbose_name="Email")
    telefone = models.CharField(max_length=20, blank=True, null=True, verbose_name="Telefone")
    data_cadastro = models.DateTimeField(auto_now_add=True, verbose_name="Data de Cadastro")

    class Meta:
        verbose_name = "Cliente"
        verbose_name_plural = "Clientes"
        ordering = ['nome']

    def __str__(self):
        return self.nome

# Modelo Produto: Para representar os produtos que podem ser comprados
class Produto(models.Model):
    nome = models.CharField(max_length=255, verbose_name="Nome do Produto")
    descricao = models.TextField(blank=True, null=True, verbose_name="Descrição")
    preco_unitario = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Preço Unitário Atual")
    estoque = models.IntegerField(default=0, verbose_name="Estoque")
    data_criacao = models.DateTimeField(auto_now_add=True, verbose_name="Data de Criação")
    data_atualizacao = models.DateTimeField(auto_now=True, verbose_name="Última Atualização")

    class Meta:
        verbose_name = "Produto"
        verbose_name_plural = "Produtos"
        ordering = ['nome']

    def __str__(self):
        return f"{self.nome} (R${self.preco_unitario:.2f})

# Modelo Pedido: Para representar um pedido feito por um cliente
class Pedido(models.Model):
    STATUS_PEDIDO_CHOICES = [
        ('PENDENTE', 'Pendente'),
        ('PAGO', 'Pago'),
        ('EM_PROCESSAMENTO', 'Em Processamento'),
        ('ENVIADO', 'Enviado'),
        ('ENTREGUE', 'Entregue'),
        ('CANCELADO', 'Cancelado'),
    ]

    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='pedidos', verbose_name="Cliente")
    data_pedido = models.DateTimeField(default=timezone.now, verbose_name="Data do Pedido")
    status = models.CharField(
        max_length=20,
        choices=STATUS_PEDIDO_CHOICES,
        default='PENDENTE',
        verbose_name="Status"
    )
    valor_total = models.DecimalField(max_digits=10, decimal_places=2, default=0.00, verbose_name="Valor Total")

    class Meta:
        verbose_name = "Pedido"
        verbose_name_plural = "Pedidos"
        ordering = ['-data_pedido', 'status']

    def __str__(self):
        return f"Pedido #{self.pk} - {self.cliente.nome} ({self.get_status_display()})"

    def calcular_valor_total(self):
        """Calcula o valor total do pedido somando o valor de todos os seus itens."""
        total = sum(item.quantidade * item.preco_unitario_no_momento for item in self.itens.all())
        return total


# Modelo ItemPedido: Para representar um item específico dentro de um pedido
class ItemPedido(models.Model):
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE, related_name='itens', verbose_name="Pedido")
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE, verbose_name="Produto")
    quantidade = models.IntegerField(verbose_name="Quantidade")
    # Registra o preço do produto no momento da compra para histórico
    preco_unitario_no_momento = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Preço Unitário na Compra")

    class Meta:
        verbose_name = "Item do Pedido"
        verbose_name_plural = "Itens do Pedido"
        # Garante que um produto só apareça uma vez em um mesmo pedido
        unique_together = ['pedido', 'produto']
        ordering = ['produto__nome']

    def __str__(self):
        return f"{self.quantidade} x {self.produto.nome} em Pedido #{self.pedido.pk}"

    def save(self, *args, **kwargs):
        # Se for um novo item e o preço não for fornecido, pega o preço atual do produto
        if not self.pk and not self.preco_unitario_no_momento:
            self.preco_unitario_no_momento = self.produto.preco_unitario
        super().save(*args, **kwargs)

        # Após salvar o item, atualiza o valor total do pedido pai
        self.pedido.valor_total = self.pedido.calcular_valor_total()
        self.pedido.save(update_fields=['valor_total'])

# Signal para atualizar o valor_total do Pedido quando um ItemPedido é deletado
@receiver(post_delete, sender=ItemPedido)
def update_pedido_total_on_item_delete(sender, instance, **kwargs):
    # Recalcula e atualiza o valor_total do pedido quando um item é removido
    instance.pedido.valor_total = instance.pedido.calcular_valor_total()
    instance.pedido.save(update_fields=['valor_total'])
