import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import cover from "../../assets/images/cover.webp";

const FeaturedPosts = () => {
    const [featuredArticles, setFeaturedArticles] = useState([]);

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
          })
          .catch(error => console.error('Error fetching popular posts:', error));
      }, []);

  return (
      <div class="row">
          {featuredArticles.map((article) => (
              <div class="card card-plain shadow-xl pt-2 px-3 my-3" key={article.id}>
                  <div class="card-header p-0 position-relative">
                      <Link to={`/article/${article.id}`} class="d-block blur-shadow-image">
                          <img src={article.image} alt="featuresimage"
                              class="img-fluid shadow border-radius-lg" loading="lazy" />
                      </Link>
                      <div class="mt-3 d-flex justify-content-between">
                          <h6 class="text-xs opacity-6">{article.tags}</h6>
                          <h6 class="text-xs opacity-6"><i class="fas fa-clock text-xxs"></i> {article.reading_time} mins read</h6>
                      </div>
                  </div>
                  <div class="card-body px-0">
                      <h5 class="text-dark font-weight-bold mb-3">{article.title}</h5>
                      <div class="d-flex justify-content-between align-items-end">
                          <div class="row">
                              <div class="col-4">
                                  <img class="avatar avatar-sm shadow-xl position-relative z-index-2" src={cover} alt="dp" loading="lazy" />
                              </div>
                              <div class="col-8 d-flex align-items-end ms-n1">
                                  <p class="text-xs fw-bold">Msavvy Admin <br /> {new Date(article.post_date).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit'})}</p>
                              </div>
                          </div>
                          <Link to={`/article/${article.id}`}>
                              <p class="text-info text-xs icon-move-right">Read More
                                  <i class="fas fa-arrow-right text-xs ms-1"></i>
                              </p>
                          </Link>
                      </div>
                  </div>
              </div>
          ))}
      </div>
  )
}

export default FeaturedPosts;