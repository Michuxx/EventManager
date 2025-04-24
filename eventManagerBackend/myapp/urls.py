from django.urls import path
from .views import test

urlpatterns = [
    path('api/test/', test.as_view(), name="co to")
]
