from django.urls import path
from apps.review.views import CreateReview, ListRestaurantReviews, ToggleReview, UpdateDestroyReview, ReviewList, \
    UserReviews

urlpatterns = [
    path('', ReviewList.as_view(), name='all_reviews'),
    path('new/<int:restaurant_id>/', CreateReview.as_view(), name="new_review"),
    path('restaurant/<int:restaurant_id>/', ListRestaurantReviews.as_view(), name="list_review"),
    path('like/<int:review_id>/', ToggleReview.as_view(), name="like_review"),
    path('<int:review_id>/', UpdateDestroyReview.as_view(), name="like_review"),
    path('user/<int:user_id>/', UserReviews.as_view(), name="user_review")
]
