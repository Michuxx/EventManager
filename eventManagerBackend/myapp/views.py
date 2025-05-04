from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import os
from django.conf import settings
from .models import Event
from .serializers import EventSerializer

class EventUpload(APIView):
    def post(self, request, format=None):
        name = request.data.get('name')
        short_description = request.data.get('short_description')
        long_description = request.data.get('long_description')
        date = request.data.get('date')
        location = request.data.get('location')
        people_amount = request.data.get('people_amount', 0)
        max_people_amount = request.data.get('max_people_amount')
        image = request.FILES.get('image')

        if not all([name, short_description, long_description, date, location, max_people_amount, image]):
            return Response({'error': 'Brakuje wymaganych pól'}, status=status.HTTP_400_BAD_REQUEST)

        image_folder = os.path.join(settings.MEDIA_ROOT, 'images')
        os.makedirs(image_folder, exist_ok=True)  

        image_filename = image.name
        file_path = os.path.join(image_folder, image_filename)

        with open(file_path, 'wb') as f:
            for chunk in image.chunks():
                f.write(chunk)

        event = Event.objects.create(
            name=name,
            short_description=short_description,
            long_description=long_description,
            date=date,
            location=location,
            people_amount=people_amount or 0,
            max_people_amount=max_people_amount,
            image=image_filename
        )

        serializer = EventSerializer(event)
        return Response(serializer.data, status=status.HTTP_201_CREATED)