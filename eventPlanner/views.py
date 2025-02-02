from django.shortcuts import render
from .models import Category, CategoryImage,Blog
from django.shortcuts import render, get_object_or_404

def main(request):
    categories = Category.objects.all()
    random_images = CategoryImage.objects.all().order_by('?')[:15]
    blog = Blog.objects.all()
    return render(request, 'home.html', context={'category': categories, 'gallery': random_images,'blog':blog})

def planNow(request):
    categories = Category.objects.all()
    return render(request,'planNow.html', context={'category': categories,})


def service(request, category_id):
    category = get_object_or_404(Category, id=category_id)
    category_images = CategoryImage.objects.filter(category=category)
    return render(request, 'services.html', context={'category': category, 'category_images': category_images})
