import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import cover from "../../assets/images/cover.webp";

const FeaturedPosts = () => {
    const [featuredArticles, setFeaturedArticles] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        // Articles based on most commented
        fetch('https://msavvy-backend.onrender.com/api/article/')
          .then(response => response.json())
          .then(data => {
            // Sort articles based on comment counts
            const sortedArticles = data.sort((a, b) => b.comment_count - a.comment_count);
            // Get the top three articles
            const topThreeArticles = sortedArticles.slice(0, 3);
            setFeaturedArticles(topThreeArticles);
            setLoading(false); // Set loading to false when fetching is complete
          })
          .catch(error => {
                console.error('Error fetching featured posts:', error);
                setLoading(false); // Set loading to false in case of error
            });
      }, []);

    return (
        <section className="py-3 pt-6" id="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="mb-2 text-sm-start text-center">Featured and highly Rated Articles</h3>
                    </div>
                </div>

                {loading ? (
                    <div className='d-flex justify-content-center'>
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ):(
                    <div className="row">
                        {featuredArticles.map((article) => (
                            <div className="col-lg-4 col-sm-6" key={article.id}>
                                <div className="card card-plain shadow-xl pt-2 px-3 my-1">
                                    <div className="card-header p-0 position-relative">
                                        <Link to={`/article/${article.id}`} className="d-block blur-shadow-image">
                                            <img src={article.image} alt="postimage"
                                                className="img-fluid shadow border-radius-lg" loading="lazy" />
                                        </Link>
                                        <div className="mt-3 d-flex justify-content-between">
                                            <h6 className="text-xs opacity-6">{article.tags}</h6>
                                            <h6 className="text-xs opacity-6"><i className="fas fa-clock text-xxs"></i> {article.reading_time} mins read</h6>
                                        </div>
                                    </div>
                                    <div className="card-body px-0">
                                        <h5 className="text-dark font-weight-bold mb-3">{article.title}</h5>
                                        <div className="d-flex justify-content-between align-items-end">
                                            <div className="row">
                                                <div className="col-4">
                                                    <img className="avatar avatar-sm shadow-xl position-relative z-index-2" src={cover} alt="dp" loading="lazy" />
                                                </div>
                                                <div className="col-8 d-flex align-items-end ms-n1">
                                                    <p className="text-xs fw-bold">Author: Msavvy Admin <br /> {new Date(article.post_date).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit'})}</p>
                                                </div>
                                            </div>
                                            <Link to={`/article/${article.id}`}>
                                                <p className="text-info text-xs icon-move-right">Read More
                                                    <i className="fas fa-arrow-right text-xs ms-1"></i>
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    )
}

export default FeaturedPosts;