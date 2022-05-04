from rest_framework.generics import ListCreateAPIView, DestroyAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from apps.user.permissions import IsUserOrReadOnly
from apps.comment.serializer import CommentSerializer
from apps.comment.models import Comment


class CreateCommentView(ListCreateAPIView):
    """
    Create review and get list of reviews
    """
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    lookup_field = 'review_id'
    permission_classes = [IsUserOrReadOnly, IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user, review_id=self.kwargs['review_id'])


class RemoveComment(DestroyAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    lookup_url_kwarg = 'comment_id'
    permission_classes = [IsUserOrReadOnly, IsAuthenticated]


class UserComment(ListAPIView):
    """
    Get Comments from user
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_field = 'user_id'
    permission_classes = [AllowAny]

    def get_queryset(self):
        return self.queryset.filter(user=self.kwargs.get('user_id'))

