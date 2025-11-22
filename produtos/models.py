from django.db import models

class CategoriaProduto(models.Model):
    nome = models.CharField(max_length=100, unique=True, verbose_name="Nome da Categoria")

    class Meta:
        verbose_name = "Categoria de Produto"
        verbose_name_plural = "Categorias de Produtos"

    def __str__(self):
        return self.nome

class Produto(models.Model):
    nome = models.CharField(max_length=200, unique=True, verbose_name="Nome do Produto")
    descricao = models.TextField(blank=True, null=True, verbose_name="Descrição Detalhada")
    preco = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Preço")
    estoque = models.IntegerField(default=0, verbose_name="Quantidade em Estoque")
    categoria = models.ForeignKey(
        CategoriaProduto,
        on_delete=models.SET_NULL, # Define o comportamento quando a categoria associada é deletada
        related_name='produtos',   # Nome para o relacionamento reverso (ex: categoria.produtos.all())
        null=True, blank=True,     # Permite que um produto exista sem uma categoria ou que a categoria seja opcional
        verbose_name="Categoria"
    )

    class Meta:
        verbose_name = "Produto"
        verbose_name_plural = "Produtos"
        ordering = ['nome'] # Ordenação padrão por nome

    def __str__(self):
        return self.nome
