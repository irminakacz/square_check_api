from django.conf.urls import url, include
from square_check import views
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token

router = DefaultRouter()
router.register(r'tasks', views.TaskViewSet, base_name="list_tasks")
router.register(r'lists', views.ListViewSet, base_name="user_lists")
router.register(r'users', views.UserViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^square-check-auth/', obtain_jwt_token)
]
