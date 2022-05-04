from django.db import models
from django.contrib.auth import get_user_model
from apps.restaurant.models import Restaurant

User = get_user_model()

class Review(models.Model):
    text_content = models.CharField(max_length=250)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(to=User, related_name='user_review', on_delete=models.CASCADE)
    likes = models.ManyToManyField(to=User, related_name='review_like', blank=True)
    restaurant = models.ForeignKey(to=Restaurant, related_name='restaursant')





