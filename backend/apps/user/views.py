from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
from apps.user.models import User
from apps.user.permissions import IsUser
from apps.user.serializer import MeSerializer, UserSerializer
from rest_framework.response import Response


class MeView(RetrieveUpdateDestroyAPIView):
    """
    Logged in user profile view and update
    """
    queryset = User.objects.all()
    serializer_class = MeSerializer

    def get_object(self):
        return self.request.user


class UserListView(ListAPIView):
    """
    Get all users
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsUser]


class GetSpecificUser(RetrieveAPIView):
    """
    Get specific user profile
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = "user_id"


class SearchByName(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        first_name = kwargs.get('ref')
        queryset = self.get_queryset().filter(first_name__icontains=first_name)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
