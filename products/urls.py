from django.urls import path
from . import views

urlpatterns = [
    path('api/product/', views.ProductListAPIView.as_view()),
    path('api/product/<int:product_id>', views.ProductDetailAPIView.as_view()),
]