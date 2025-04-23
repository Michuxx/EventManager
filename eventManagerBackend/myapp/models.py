from django.db import models

class Event(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    short_description = models.CharField(max_length=150)
    long_description = models.CharField(max_length=350)
    date = models.DateField()