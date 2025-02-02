from django.urls import path
from django.shortcuts import render
from . import views

urlpatterns = [
path('',views.main,name='home'),
path('start-planning/', views.planNow, name='start_plan'),
# path('service/', views.service, name='service'),
path('service/<int:category_id>/', views.service, name='service'),

]