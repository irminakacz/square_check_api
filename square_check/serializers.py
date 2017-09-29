from rest_framework import serializers
from square_check.models import Task, List
from django.contrib.auth.models import User


class TaskSerializer(serializers.ModelSerializer):
    list = serializers.ReadOnlyField(source="list.title")

    class Meta:
        model = Task
        fields = ('id', 'task', 'done', 'list')


class ListSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source="user.username")
    tasks = TaskSerializer(many=True)

    class Meta:
        model = List
        fields = ('id', 'title', 'color', 'tasks', 'user')


class UserSerializer(serializers.ModelSerializer):
    lists = serializers.ReadOnlyField(source="list.title")

    class Meta:
        model = User
        fields = ('id', 'username', 'lists')
