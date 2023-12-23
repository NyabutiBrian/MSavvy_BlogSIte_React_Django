from django.contrib import admin
from articles.models import Category, Article, Comment, ContactMessage, PortfolioContactMessage

# CHANGING TABLE LAYOUT
class categoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'category_date')

class ArticleAdmin(admin.ModelAdmin):
    list_display = ('id', 'category', 'title', 'author', 'post_date', 'content')
    list_filter = ['category']

class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'article','fullname', 'comment_date', 'message')
    list_filter = ['comment_date']

class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'email','fullname', 'message_date', 'message')
    list_filter = ['message_date']

class PortfolioContactMessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'email','full_name', 'message_date', 'message')
    list_filter = ['message_date']

# Register your models here.
admin.site.register(Category, categoryAdmin)
admin.site.register(Article, ArticleAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(ContactMessage, ContactMessageAdmin)
admin.site.register(PortfolioContactMessage, PortfolioContactMessageAdmin)
