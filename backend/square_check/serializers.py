from rest_framework import serializers
from square_check.models import Task, List


class ListSerializer(serializers.ModelSerializer):
    tasks = serializers.PrimaryKeyRelatedField(many=True,
                                               queryset=Task.objects.all())

    class Meta:
        model = List
        fields = ('id', 'title', 'color', 'tasks')


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'task', 'done', 'list')

