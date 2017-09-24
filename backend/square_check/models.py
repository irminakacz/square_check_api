from django.db import models
from django.contrib.auth.models import User


class List(models.Model):
    user = models.ForeignKey(User, related_name="lists",
                             on_delete=models.CASCADE)
    title = models.CharField(max_length=100, default="List")
    color = models.CharField(max_length=10, default="#e5ae72")


class Task(models.Model):
    list = models.ForeignKey(List, related_name="tasks",
                             on_delete=models.CASCADE)
    task = models.TextField()
    done = models.BooleanField(default=False)
