from django.urls import path
from .views import EventUpload

urlpatterns = [
    path('events/upload/', EventUpload.as_view(), name="co to")
]
