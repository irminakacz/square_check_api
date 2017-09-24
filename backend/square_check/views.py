from square_check.models import Task, List
from square_check.serializers import TaskSerializer, ListSerializer
from rest_framework import viewsets


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class ListViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializer


