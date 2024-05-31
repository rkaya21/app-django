from django.db import models
from .views import contact_form, contact


# Create your models here.


class GeneralSettings(models.Model):
    name = models.CharField(
        default='',
        max_length=254,
        blank=True,
    )
    description = models.CharField(
        default='',
        max_length=254,
        blank=True,
    )
    parameter = models.CharField(
        default='',
        max_length=254,
        blank=True,
    )
    update_date = models.DateTimeField(
        blank=True,
        auto_now=True,
    )
    create_date = models.DateTimeField(
        blank=True,
        auto_now_add=True,
    )