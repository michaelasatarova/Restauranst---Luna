from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/username/<filename>
    return f'{instance.name}/{filename}'


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    PUBLIC_FIELDS = ('id', 'first_name', 'last_name', 'phone_number', 'location', 'created', 'profile_picture','things_user_love', 'description' )
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=80)
    last_name = models.CharField(max_length=80)
    phone_number = models.IntegerField(blank=True, null=True)
    location = models.CharField(max_length=80)
    created = models.DateTimeField(auto_now_add=True)
    profile_picture = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    things_user_love = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField(max_length=300, blank=True, null=True)

    def __str__(self):
        return self.username
