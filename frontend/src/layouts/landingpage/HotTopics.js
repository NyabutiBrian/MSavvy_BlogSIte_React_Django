import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';

const HotTopics = () => {
    
    const [categories, setCategories] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fetch categories
        fetch('https://msavvy-backend.onrender.com/api/category/')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));

        // Fetch articles
        fetch('https://msavvy-backend.onrender.com/api/article/')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    // number of articles in each category
    const getArticleCountByCategory = (categoryName) => {
        return articles.filter(article => article.category === categoryName).length;
    };

    return (
        <section className="py-3 pt-6" id="categories">
            <div className="container">
                <div className="row">
                    <div className="text-center">
                        <h3 className="mb-3">Hot Topics</h3>
                        <p className="text-sm">{articles.length} Articles</p>
                    </div>
                </div>

                <div className="row">
                    {categories.map((category) => (
                        <div className="col-xl-3 col-sm-6 col-12 my-2" key={category.id}>
                            <Link to={`/category/${category.id}`}>
                                <div className="card card-blog card-background">
                                    <div className="full-background" style={{ backgroundImage: `url(${category.image})` }} loading="lazy">
                                        <span className="mask bg-gradient-dark opacity-4 border-radius-xl"></span>
                                    </div>
                                    <div className="card-body">
                                        <div className="content-bottom text-end">
                                            <h6 className="text-white">{category.name}</h6>
                                            <p className="text-sm">{getArticleCountByCategory(category.id)} Articles</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default HotTopics;