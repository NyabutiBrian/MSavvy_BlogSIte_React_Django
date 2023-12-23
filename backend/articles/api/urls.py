from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import CategoryView, ArticleView, CommentView, ContactMessageView, PortfolioContactMessageView

post_router = DefaultRouter()
post_router.register(r'category', CategoryView)
post_router.register(r'article', ArticleView)
post_router.register(r'comment', CommentView)
post_router.register(r'contactus', ContactMessageView)
post_router.register(r'portfoliomessage', PortfolioContactMessageView)