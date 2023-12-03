import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PopularPosts = () => {
    const [popularArticles, setPopularArticles] = useState([]);

    useEffect(() => {
        // Articles based on most commented
        fetch('https://msavvy-backend.onrender.com/api/article/')
          .then(response => response.json())
          .then(data => {
            // Sort articles based on comment counts
            const sortedArticles = data.sort((a, b) => b.comment_count - a.comment_count);
            // Get the top three articles
            const topThreeArticles = sortedArticles.slice(0, 3);
            setPopularArticles(topThreeArticles);
          })
          .catch(error => console.error('Error fetching popular posts:', error));
      }, []);

  return (
      <div className="card card-plain shadow-lg mt-4 p-4">
          <div className="row">
              <div className="fw-bold">
                  <h4>Popular Posts</h4>
                  <hr className="border border-dark border-1 opacity-2" />
              </div>
          </div>

          {popularArticles.map(article => (
            <Link to={`/article/${article.id}`} key={article.id}>
                <div className="row py-2">
                    <div className="col-sm-2 col-4">
                        <img className="avatar avatar-xl shadow-xl position-relative z-index-2" src={article.image} alt="dp" loading="lazy" />
                    </div>
                    <div className="col-sm-10 col-8 d-flex flex-column align-items-start justify-content-center">
                        <h6 className="px-xl-2">{article.title}</h6>
                        <h6 className="px-xl-2 text-xs opacity-6 text-end">{new Date(article.post_date).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit'})} <i className="fas fa-clock text-xxs"></i> {article.reading_time} mins read</h6>
                    </div>
                    <div>
                        <hr className="border border-dark border-1 opacity-1"></hr>
                    </div>
                </div>
            </Link>
          ))}

      </div>
  )
}

export default PopularPosts;