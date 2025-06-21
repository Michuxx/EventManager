from django.urls import path
from .views import EventUpload
from .views import GetAllEvents
from .views import DeleteEvent
from .views import EditEvent
from .views import GetEvent

urlpatterns = [
    path('events/upload/', EventUpload.as_view(), name="uploadEvent"),
    path('events/getAllEvents/', GetAllEvents.as_view(), name="getEvents"),
    path('events/delete/<int:pk>/', DeleteEvent.as_view(), name="deleteEvent"),
    path('events/update/<int:pk>/', EditEvent.as_view(), name="EditEvent"),
    path('events/getEvent/<int:pk>', GetEvent.as_view(), name="getEvent")
]
