from django.contrib import admin
from .models import Category, CategoryImage,Blog

class CategoryImageInline(admin.TabularInline):
    model = CategoryImage
    extra = 1  

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'event_count', 'created_at')
    search_fields = ('name',)
    inlines = [CategoryImageInline] 

admin.site.register(CategoryImage)
admin.site.register(Blog)
