from django.contrib import admin
from .models import Product, Tag

admin.site.register(Tag)
admin.site.register(Product)
