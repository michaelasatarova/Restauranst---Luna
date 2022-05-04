from rest_framework import serializers


class NewUserSerializer(serializers.Serializer):
    # class Meta:
    email = serializers.EmailField()
