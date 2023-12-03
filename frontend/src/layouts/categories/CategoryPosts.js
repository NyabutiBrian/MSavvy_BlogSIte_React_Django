import React, { useState, useEffect  } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FeaturedPosts from './FeaturedPosts';

const CategoryPosts = () => {
    const { id } = useParams(); // Get the category id from the URL parameter
    const [articless, setArticless] = useState([]);

    useEffect(() => {
        // Fetch articles by category
        fetch(`https://msavvy-backend.onrender.com/api/article/by_category/?category=${id}`)
            .then(response => response.json())
            .then(data => setArticless(data))
            .catch(error => console.error('Error fetching articles by category:', error));
    }, [id]);

    const handleSearch = (searchTerm) => {
        // Implement search functionality here
        console.log('Search term:', searchTerm);
    };

  return (
    <section class="py-3 pt-xl-6" id="categoryposts">
        <div class="container">
            <div class="row">
                <div class="col-xl-7 col-lg-9 col-12 mx-auto">
                    {/* SEARCH DISPLAY SM */}
                    {/* <div class="row mt-xl-4 mb-6 d-xl-none shadow-xl">
                        <div class="col-12">
                
                            < Search />
                
                        </div>
                    </div> */}

                    {articless.map(article => (
                        <div class="card card-profile shadow-lg mt-4 mb-6" key={article.id}>
                            <Link to={`/article/${article.id}`}>
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 col-12 mt-n5">
                                        <div class="p-3 pe-md-0">
                                            <img class="w-100 border-radius-md shadow-lg" src={article.image} alt="categoryimage" />
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-md-6 col-12 my-auto">
                                        <div class="card-body ps-lg-0">
                                            <h5 class="mb-0">{article.title}</h5>
                                            <p class="mb-0">{article.content}</p>
                                            <div class="mt-3 d-flex justify-content-between">
                                                <h6 class="text-xs opacity-6">{article.tags}</h6>
                                                <h6 class="text-xs opacity-6"><i class="fas fa-clock text-xxs"></i> {article.reading_time} mins read</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>
                
                <div class="col-xl-5 col-lg-8 col-12 mx-auto">
                    {/* SEARCH DISPLAY XL */}
                    {/* <div class="row mb-3 d-xl-block d-none shadow-xl">
                        <div class="col-12">
                
                            < Search />
                
                        </div>
                    </div> */}

                    {/* FEATURES */}
                    <div class="row">
                        <div class="col-12">
                            <h4 class="mb-2 text-center">Featured and highly rated Articles</h4>
                        </div>
                    </div>

                    < FeaturedPosts />

                </div>
            </div>
        </div>
    </section>
  )
}

export default CategoryPosts;