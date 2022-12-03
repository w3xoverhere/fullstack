from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers
from djoser.conf import settings


class TokenSerializer(serializers.ModelSerializer):
    auth_token = serializers.CharField(source="key")

    class Meta:
        model = settings.TOKEN_MODEL
        fields = ("auth_token",)
