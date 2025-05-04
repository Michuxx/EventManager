from django.db import models

class Event(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    short_description = models.CharField(max_length=150)
    long_description = models.CharField(max_length=350)
    date = models.DateTimeField()
    location = models.CharField(max_length=150, null=True, blank=True)
    people_amount = models.IntegerField(default=0)
    max_people_amount = models.IntegerField(default=0)
    image = models.CharField(max_length=250, blank=True)


