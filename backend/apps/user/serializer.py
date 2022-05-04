from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ['password']


class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = User.PUBLIC_FIELDS
