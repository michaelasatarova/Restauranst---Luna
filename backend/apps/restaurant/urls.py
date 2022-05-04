from django.urls import path
from apps.restaurant.views import RestaurantList, RestaurantCreate, SearchByCategory, SearchByUserID, \
    SearchByRestaurantID, RestaurantUpdateDestroy

urlpatterns = [
    path('', RestaurantList.as_view(), name='all_restaurants'),
    path('new/', RestaurantCreate.as_view(), name='new_restaurant'),
    path('category/<str:category_id>/', SearchByCategory.as_view(), name='category'),
    path('user/<int:user_id>/', SearchByUserID.as_view(), name='search_by_user_id'),
    path('<int:restaurant_id>/', SearchByRestaurantID.as_view(), name='search_restaurant_id'),
    path('search/<restaurant_id>/', RestaurantUpdateDestroy.as_view(), name='search_edit')

]
