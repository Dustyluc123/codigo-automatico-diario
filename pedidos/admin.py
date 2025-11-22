from django.contrib import admin
from .models import Cliente, Produto, Pedido, ItemPedido

# Registra seus modelos aqui para que eles apareçam no painel de administração.
admin.site.register(Cliente)
admin.site.register(Produto)
admin.site.register(Pedido)
admin.site.register(ItemPedido)
