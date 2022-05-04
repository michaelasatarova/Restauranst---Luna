from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


def user_directory_path(instance, filename):
    return f'{instance.name}/{filename}'


class Restaurant(models.Model):
    user = models.ForeignKey(to=User, related_name='user_restaurant', on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=100)
    CATEGORY_CHOICES = [
        (1, 'Select category'),
        (2, 'Take Away'),
        (3, 'Fast Food'),
        (4, 'Casual Dining'),
        (5, 'Fine Dining'),
        (6, 'Bistro'),
        (7, 'Caffe'),
        (8, 'Buffet'),
        (9, 'Pub')
    ]
    category = models.IntegerField(choices=CATEGORY_CHOICES, default=1)
    COUNTRY_CHOICES = [
        (1, 'Select country'),
        (2, 'Switzerland'),
        (3, 'Germany'),
        (4, 'Austria'),
        (5, 'Italy'),
        (6, 'Poland'),
        (7, 'Slovakia'),
        (8, 'Buffet')
    ]
    country = models.IntegerField(choices=COUNTRY_CHOICES, default=1)
    city = models.CharField(max_length=100)
    zip = models.IntegerField(null=True, blank=True)
    website = models.URLField(max_length=100, null=True, blank=True)
    phone_number = models.IntegerField(null=True, blank=True)
    email = models.EmailField(unique=True, blank=True, null=True)
    opening_hours = models.CharField(max_length=100)
    PRICE_CHOICES = [
        (1, 'to 10$'),
        (2, 'from 10$ to 50$'),
        (3, 'more than 50$')
    ]
    price_level = models.IntegerField(choices=PRICE_CHOICES, default=1)
    image = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.username}: {self.name}'
