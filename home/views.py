from django.shortcuts import render,HttpResponse
from home.models import Data
# Create your views here.
def home(request):
    return render(request, 'weather.html')    
 
def contact(request):
    dictio={'success':False}

    if request.method=="POST":
        name=request.POST['name']
        email=request.POST['email']
        phone=request.POST['phone']
        subject=request.POST['subject']
        message=request.POST['message']
        ins=Data(name=name, email=email, phone=phone, subject=subject, message=message)
        ins.save()
        dictio={'success':True}
        print("The data written into the database")
    return render(request, 'contacts.html',dictio)
def data(request):
    all_datas=Data.objects.all()
    context={'info':all_datas}
    # for item in all_datas:
    #     print(item.email)
    return render(request, 'data.html',context) 