from rest_framework.serializers import ModelSerializer
from ..models import Category, Article, Comment, ContactMessage

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'image', 'category_date')

class ArticleSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'category', 'title', 'author', 'post_date', 'content', 'image', 'reading_time', 'tags')

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'article','fullname', 'comment_date', 'message')

class ContactMessageSerializer(ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ('id', 'email','fullname', 'message_date', 'message')