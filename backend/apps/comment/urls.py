from django.urls import path
from apps.comment.views import CreateCommentView, RemoveComment, UserComment

urlpatterns = [
    path('new/<int:review_id>/', CreateCommentView.as_view(), name="comments_create"),
    path('<int:comment_id>/', RemoveComment.as_view(), name="remove_comment"),
    path('search/<int:user_id>/', UserComment.as_view(), name='user_comment')
]
