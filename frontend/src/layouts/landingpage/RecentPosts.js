import PopularPosts from "../postpage/PopularPosts";
import LatestComments from "../postpage/LatestComments";

import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';

const RecentPosts = () => {

    const [articles, setArticles] = useState([]);
    const [displayCount, setDisplayCount] = useState(5); // Initial number of articles to display
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        // Fetch Articles
        fetch('https://msavvy-backend.onrender.com/api/article/normal_list/')
            .then(response => response.json())
            .then(data => {
                setArticles(data);
                setLoading(false); // Set loading to false when fetching is complete
            })
            .catch(error => {
                console.error('Error fetching article:', error);
                setLoading(false); // Set loading to false in case of error
            });
    }, []);

    const handleLoadMore = () => {
        // Increase the display count to load more comments
        setDisplayCount(displayCount + 5);
    };

    return (
        <section className="py-3 pt-6" id="recents">
            <div className="container">
                <div className="row">
                <div className="mb-5 mt-5 text-center">
                    <h3 className="z-index-1 position-relative">Recent Posts</h3>
                    <h5>Don't miss the latest trends</h5>
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
                        <div className="col-xl-7 col-lg-9 col-12 mx-auto">

                            {articles.slice(0, displayCount).map((article) => (
                                <div className="card card-profile shadow-lg mt-4 mb-6" key={article.id}>
                                    <Link to={`/article/${article.id}`}>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 col-12 mt-n5">
                                                <div className="p-3 pe-md-0">
                                                    <img className="w-100 border-radius-md shadow-lg" src={article.image} alt="postimage" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-6 col-12 my-auto">
                                                <div className="card-body ps-lg-0">
                                                    <h5 className="mb-0">{article.title}</h5>
                                                    <p className="mb-0">
                                                        {article.content.length > 100 ? `${article.content.substring(0, 100)}...` : article.content}
                                                    </p>
                                                    <div className="mt-3 d-flex justify-content-between">
                                                        <h6 className="text-xs opacity-6">{article.tags}</h6>
                                                        <h6 className="text-xs opacity-6"><i className="fas fa-clock text-xxs"></i> {article.reading_time} mins read </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                            {displayCount < articles.length && (
                                <div className="text-center">
                                    <button onClick={handleLoadMore} className='btn btn-sm bg-gradient-white text-dark mb-0 me-1 shadow mt-md-0 mt-2'>Load More Articles</button>
                                </div>
                            )}
                        </div>

                        <div className="col-xl-5 col-lg-8 col-12 mx-auto" >
                            < PopularPosts />

                            < LatestComments />
                        </div>
                    </div>
                )}

            </div>
        </section>
    )
}

export default RecentPosts;