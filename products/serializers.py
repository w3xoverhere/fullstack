from rest_framework import serializers
from .models import Product

class TagListingField(serializers.RelatedField):
    def to_representation(self, value):
        return value.name



class ProductSerializer(serializers.ModelSerializer):
    tags = TagListingField(many=True, read_only=True)
    class Meta:
        model = Product
        fields = ('id', 'name', 'content', 'price', 'discount' ,'img', 'tags', 'created_at')