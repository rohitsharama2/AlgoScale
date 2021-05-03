from django.db import models

# Create your models here.

class ContactForm(models.Model):
    id=models.BigAutoField(primary_key=True)
    date_created= models.DateField(auto_now_add=True)
    name=models.CharField(max_length=100)
    lname=models.CharField(max_length=100)
    email=models.EmailField(max_length=250)
    message=models.TextField(max_length=500)


