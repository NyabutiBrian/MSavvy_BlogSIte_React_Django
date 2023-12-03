import React, { useState, useEffect  } from 'react';
import carousel1 from '../../assets/images/cover.png';

const CarouselSlider = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fetch articles
        fetch('https://msavvy-backend.onrender.com/api/article/')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

  return (
    <section id="carouselChange">
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={carousel1} className="d-block w-100" alt="..." />
                                <span className="mask bg-gradient-dark opacity-8"></span>
                                <div className="carousel-caption">
                                    <h2 className="text-white">MSavvy</h2>
                                </div>
                            </div>

                            {articles.map((article) => (
                                <div className="carousel-item" key={article.id}>
                                    <img src={article.image} className="d-block w-100" alt="..." />
                                    <span className="mask bg-gradient-dark opacity-8"></span>
                                    <div className="carousel-caption">
                                        <h2 className="text-white">{article.title}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CarouselSlider;