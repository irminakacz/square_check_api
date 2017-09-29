from square_check.models import Task, List
from square_check.serializers import TaskSerializer, ListSerializer, UserSerializer

from rest_framework import viewsets
from rest_framework import permissions

from django.contrib.auth.models import User


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = (permissions.IsAuthenticated,)


class ListViewSet(viewsets.ModelViewSet):
    serializer_class = ListSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return List.objects.filter(user=self.request.user)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

