from django.urls import path
from . import views


urlpatterns = [
    path('', views.index),
    path('catalog/', views.index),
    path('catalog/<int:product_id>/', views.index),
    path('profile/', views.index),
    path('auth/', views.index),
    path('my-cart/', views.index),
    path('settings/', views.index),
]