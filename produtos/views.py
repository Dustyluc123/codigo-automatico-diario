from rest_framework import viewsets
from produtos.models import Produto, CategoriaProduto
from produtos.serializers import ProdutoSerializer, CategoriaProdutoSerializer


class CategoriaProdutoViewSet(viewsets.ModelViewSet):
    """
    A ViewSet para visualizar e editar instâncias de CategoriaProduto.
    Fornece operações CRUD completas via API.
    """
    queryset = CategoriaProduto.objects.all()
    serializer_class = CategoriaProdutoSerializer


class ProdutoViewSet(viewsets.ModelViewSet):
    """
    A ViewSet para visualizar e editar instâncias de Produto.
    Fornece operações CRUD completas via API.
    """
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer