from rest_framework.pagination import PageNumberPagination
from .models import Product
from .serializers import ProductSerializer
from rest_framework import generics
from rest_framework.response import Response


class ProductListAPIViewPagination(PageNumberPagination):
    page_size = 3
    page_size_query_param = 'page_size'
    max_page_size = 3


class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.filter(is_published=True)
    serializer_class = ProductSerializer
    pagination_class = ProductListAPIViewPagination


class ProductDetailAPIView(generics.RetrieveAPIView):
    def get(self, request, product_id=None):
        product = Product.objects.filter(pk=product_id, is_published=True)
        if product:
            serializer = ProductSerializer(product[0])
            return Response(serializer.data)
        else:
            return Response('None')

