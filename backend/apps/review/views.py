from rest_framework.generics import ListCreateAPIView, ListAPIView, GenericAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from apps.user.models import User
from apps.restaurant.models import Restaurant
from apps.review.models import Review
from apps.review.permissions import IsOwnerOrReadOnly
from apps.review.serializer import ReviewSerializer


class CreateReview(ListCreateAPIView):
    """
    Create review
    """
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_field = 'restaurant_id'
    permission_classes = [IsOwnerOrReadOnly, IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user, restaurant_id=self.kwargs['restaurant_id'])


class ListRestaurantReviews(ListAPIView):
    """
    Get reviews on single restaurant
    """
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'restaurant_id'
    permission_classes = [AllowAny]

    def get_queryset(self):
        single_restaurant = Restaurant.objects.get(id=self.kwargs['restaurant_id'])
        return Review.objects.filter(restaurant=single_restaurant)


class ToggleReview(GenericAPIView):
    """
    Like/Unlike review
    """
    queryset = Review
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'review_id'
    permission_classes = [IsOwnerOrReadOnly, IsAuthenticated]

    def patch(self, request, *args, **kwargs):
        review = self.get_object()
        user = self.request.user
        user_liked_review = user in review.likes.all()
        if user_liked_review:
            review.likes.remove(user)
        else:
            review.likes.add(user)
        return Response(self.get_serializer(review).data)


class UpdateDestroyReview(RetrieveUpdateDestroyAPIView):
    """
    get, update and delete specific review by owner
    """
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'review_id'
    permission_classes = [IsOwnerOrReadOnly, IsAuthenticated]


class ReviewList(ListAPIView):
    """
    List of all reviews
    """
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [AllowAny]


class UserReviews(ListAPIView):
    """
    All reviews of single user
    """
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'user_id'
    permission_classes = [AllowAny]

    def get_queryset(self):
        single_user = User.objects.get(id=self.kwargs['user_id'])
        return Review.objects.filter(user=single_user)
