from django.urls import path
from apps.new_user.views import NewUserListView, RegistrationValidation

urlpatterns = [
    path('', NewUserListView.as_view(), name='subscribe'),
    path('validation/', RegistrationValidation.as_view(), name='validation')
]
