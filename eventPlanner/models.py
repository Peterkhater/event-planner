from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)
    icon = models.ImageField(upload_to='photos', null=False, blank=False)
    event_count = models.PositiveIntegerField(default=0)  
    created_at = models.DateTimeField(auto_now_add=True) 

    def __str__(self):
        return self.name

class CategoryImage(models.Model):
    category = models.ForeignKey(Category, related_name="images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to='photos', null=False, blank=False) 
    uploaded_at = models.DateTimeField(auto_now_add=True)
    photoGrapher =models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return f"Image for {self.category.name}"

class Blog(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='photos', null=False, blank=False)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Image for {self.title}"
