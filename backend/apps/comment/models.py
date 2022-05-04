from django.db import models
from django.contrib.auth import get_user_model
from apps.review.models import Review

User = get_user_model()


class Comment(models.Model):
    text = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)
    review = models.ForeignKey(to=Review, related_name='comment', on_delete=models.CASCADE)
    user = models.ForeignKey(to=User, related_name='user_comment', on_delete=models.CASCADE)

    def __str__(self):
        return f'Comment {self.text} by {self.user.username}'
