from django.conf.urls import url, include
from square_check import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'tasks', views.TaskViewSet)
router.register(r'lists', views.ListViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
