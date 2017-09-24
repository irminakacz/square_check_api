from rest_framework import serializers
from square_check.models import Task, List


class TaskSerializer(serializers.ModelSerializer):
    list = serializers.ReadOnlyField(source="list.title")

    class Meta:
        model = Task
        fields = ('id', 'task', 'done', 'list')


class ListSerializer(serializers.ModelSerializer):
    tasks = TaskSerializer(many=True)

    class Meta:
        model = List
        fields = ('id', 'title', 'color', 'tasks')


