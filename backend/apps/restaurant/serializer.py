from django.contrib.auth import get_user_model
from django.db.models import Avg
from rest_framework import serializers
from apps.restaurant.models import Restaurant
from apps.user.serializer import UserSerializer
from apps.review.models import Review

User = get_user_model()


class NewReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'


class RestaurantSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    number_of_reviews = serializers.SerializerMethodField()
    restaurant_review = NewReviewSerializer(read_only=True, many=True)


    def get_number_of_reviews(self, obj):
        return obj.restaurant_review.all().count()

    class Meta:
        model = Restaurant
        # fields = '__all__'
        fields = ['id', 'name', 'category', 'country', 'city', 'zip', 'website', 'phone_number', 'email',
                  'opening_hours', 'price_level', 'image', 'created', 'number_of_reviews', 'user', 'restaurant_review']


