from django.shortcuts import render


def index(request, product_id=None):
    return render(request, 'frontend/index.html')
