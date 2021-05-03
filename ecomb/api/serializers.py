from .models import ContactForm
from rest_framework import serializers

class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model=ContactForm
        fields= ['name','lname','date_created','message']
