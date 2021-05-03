from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import ContactFormSerializer
from .models import ContactForm


import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mysite.settings")

import django
django.setup()

from django.core.management import call_command


# Create your views here.


class ContactFormList(APIView):
    def get(self, request):
        ContactForms = ContactForm.objects.all()
        serializer = ContactFormSerializer(ContactForms, many=True)    
        return Response(serializer.data)

    def post(self, request):
        serializer = ContactFormSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_object(self, id):
        try:
            return ContactForm.objects.get(id=id)
        except ContactForm.DoesNotExist:
            raise Http404

   
    def put(self, request, id):
        ContactForm = self.get_object(id)
        serializer = ContactFormSerializer(ContactForm, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        ContactForm = self.get_object(id)
        ContactForm.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class Analytics(APIView):
    def post(self, request):
        start_date=request.data['start_date']
        end_date=request.data['end_date']
        data=[]
        ContactForms = ContactForm.objects.filter(date_created__range=[start_date, end_date])
        for contact in ContactForms: 
            day=contact.date_created.strftime("%Y-%m-%d")
            if len(data)==0 or data[-1]['day']!=day:
                daily_contacts=ContactForms.filter(date_created=day)
                count_per_day=daily_contacts.count()
                result={"day":day , "count":count_per_day}
                data.append(result)
          
        return Response(data)

    
