from django.urls import path
from apps.user.views import MeView, UserListView, GetSpecificUser, SearchByName

urlpatterns = [
    path('me/', MeView.as_view(), name="user_profile"),
    path('list/', UserListView.as_view(), name="display_users"),
    path('<int:user_id>/', GetSpecificUser.as_view(), name="specific_user"),
    path('search/<str:ref>/', SearchByName.as_view(), name="search_user")
]