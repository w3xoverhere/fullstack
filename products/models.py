from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


def gen_pic_path(instance, filename):
    return "products/%s_%s" % (instance.pk, filename)


class Product(models.Model):
    name = models.CharField(max_length=150, db_index=True, verbose_name='Название')
    content = models.TextField(verbose_name='Описание')
    price = models.PositiveIntegerField(db_index=True, verbose_name='Цена')
    discount = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(100)],
                                           blank=True, null=True, verbose_name='Скидка')
    tags = models.ManyToManyField('Tag', db_index=True, verbose_name='Теги')
    img = models.ImageField(upload_to=gen_pic_path,verbose_name='Изображение', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата редактирования')
    is_published = models.BooleanField(default=False, verbose_name='Опубликован')

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'
        ordering = ['-created_at']

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(max_length=60, verbose_name='Тег')

    class Meta:
        verbose_name = 'Тег'
        verbose_name_plural = 'Теги'

    def __str__(self):
        return self.name
