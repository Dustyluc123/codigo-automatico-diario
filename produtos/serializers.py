from rest_framework import serializers
from produtos.models import CategoriaProduto


class CategoriaProdutoSerializer(serializers.ModelSerializer):
    """
    Serializer para o modelo CategoriaProduto.
    Converte instâncias de CategoriaProduto em representações JSON
    e vice-versa, incluindo todos os seus campos.
    """
    class Meta:
        model = CategoriaProduto
        fields = '__all__'
