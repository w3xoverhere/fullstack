import binascii
import os

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from .managers import CustomUserManager


def gen_avatar_path(instance, filename):
    return "avatars/%s_%s" % (instance.pk, filename)


class CustomUser(AbstractUser):
    email = models.EmailField(_('email address'), unique=True)
    avatar = models.ImageField(_('avatar'), upload_to=gen_avatar_path)
    objects = CustomUserManager()

    def __str__(self):
        return self.username
