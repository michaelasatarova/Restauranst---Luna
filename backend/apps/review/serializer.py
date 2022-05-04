from rest_framework import serializers
from apps.review.models import Review
from apps.user.serializer import UserSerializer
from apps.restaurant.serializer import RestaurantSerializer


class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    restaurant = RestaurantSerializer(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'



