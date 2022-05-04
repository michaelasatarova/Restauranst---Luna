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
    restaurant = models.ForeignKey(to=Restaurant, related_name='restaurant_review', on_delete=models.CASCADE)
    RATING_CHOICES = [
        (0, 'Not rated'),
        (1, 'Not good'),
        (2, 'Could be better'),
        (3, 'Ok'),
        (4, 'Good'),
        (5, 'Great'),
    ]
    rating = models.IntegerField(choices=RATING_CHOICES, default=0)

    def __str__(self):
        return f'Review by{self.user.username} on Restaurant: {self.restaurant}'
