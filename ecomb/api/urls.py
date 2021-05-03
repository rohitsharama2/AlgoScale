from django.contrib import admin
from django.urls import path
from .views import ContactFormList , Analytics

urlpatterns = [
    path('contacts/', ContactFormList.as_view() ),
    path('analytics/' , Analytics.as_view()),
    
]