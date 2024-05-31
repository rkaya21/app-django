from django.http import JsonResponse
from django.shortcuts import render
# create your views here.

def contact_form(request):
    contact_form({'success': True, 'message': 'Contact form sent successfully'})
    return JsonResponse(context)

def contact(request):
    return render(request, 'contact.html')