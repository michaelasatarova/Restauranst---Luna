from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView, \
    RetrieveAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from apps.restaurant.models import Restaurant
from apps.restaurant.serializer import RestaurantSerializer
from apps.restaurant.permissions import IsOwnerOrReadOnly


class RestaurantList(ListAPIView):
    """
    List of all restaurants
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [AllowAny]


class RestaurantCreate(CreateAPIView):
    """
    Create Restaurant by login user
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        return serializer


class SearchByCategory(ListAPIView):
    """
    Search restaurant by category
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        category = kwargs.get('category_id')
        queryset = self.get_queryset().filter(category__icontains=category)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


# need to be checked
class SearchByUserID(ListAPIView):
    """
    List of restaurants created by specific user
    """
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        return Restaurant.objects.filter(user_id=user_id).order_by('-created')


class SearchByRestaurantID(RetrieveAPIView):
    """
    Get specific restaurant by id
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'restaurant_id'
    permission_classes = [AllowAny]


class RestaurantUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'restaurant_id'
    permission_classes = [IsOwnerOrReadOnly]
