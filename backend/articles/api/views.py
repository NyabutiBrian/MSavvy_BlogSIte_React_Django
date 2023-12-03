from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from django.db.models import Count
from ..models import Category, Article, Comment
from .serializers import CategorySerializer, ArticleSerializer, CommentSerializer, ContactMessageSerializer

class CategoryView(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ArticleView(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def list(self, request, *args, **kwargs):
        try:
            # Retrieve all articles
            articles = self.get_queryset()

            # Annotate articles with comment count
            annotated_articles = articles.annotate(comment_count=Count('comment'))

            # Order articles by comment count in descending order
            sorted_articles = annotated_articles.order_by('-comment_count')

            # Serialize the articles
            serialized_articles = self.get_serializer(sorted_articles, many=True).data

            return Response(serialized_articles)
        except Exception as e:
            return Response({'error': str(e)})
        
    @action(detail=False, methods=['GET'])
    def normal_list(self, request):
        try:
            articles = self.get_queryset()
            serialized_articles = self.get_serializer(articles, many=True).data
            return Response(serialized_articles)
        except Exception as e:
            return Response({'error': str(e)})
        
    @action(detail=False, methods=['GET'])
    def by_category(self, request):
        try:
            category_id = request.query_params.get('category', None)
            if category_id is not None:
                articles = Article.objects.filter(category=category_id)
                serialized_articles = self.get_serializer(articles, many=True).data
                return Response(serialized_articles)
            else:
                return Response({'error': 'Category parameter is required'})
        except Exception as e:
            return Response({'error': str(e)})

class CommentView(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class ContactMessageView(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = ContactMessageSerializer
