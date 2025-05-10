from django.urls import path
from .views import EventUpload
from .views import GetAllEvents

urlpatterns = [
    path('events/upload/', EventUpload.as_view(), name="uploadEvent"),
    path('events/getAllEvents/', GetAllEvents.as_view(), name="getEvents")
]
