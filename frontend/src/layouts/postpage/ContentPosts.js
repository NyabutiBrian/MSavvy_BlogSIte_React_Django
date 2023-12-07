import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PopularPosts from "./PopularPosts";
import LatestComments from './LatestComments';

const ContentPosts = () => {
    const { id } = useParams(); // Get the article id from the URL parameter
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        setLoading(true); // Set loading to true when fetching starts
        // Fetch article content based on the id
        fetch(`https://msavvy-backend.onrender.com/api/article/${id}`)
            .then(response => response.json())
            .then(data => {
                setArticle(data);
                setLoading(false); // Set loading to false when fetching is complete
            })
            .catch(error => {
                console.error('Error fetching article:', error);
                setLoading(false); // Set loading to false in case of error
            });
    }, [id]); // Include id in the dependency array to re-fetch article when id changes

    const [fullName, setFullName] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const fullNameValue = event.target.elements.fullName.value;
        const messageValue = event.target.elements.message.value;

        fetch('https://msavvy-backend.onrender.com/api/comment/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullname: fullNameValue,
                message: messageValue,
                article: id,
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    // Assuming the presence of an 'id' property indicates a successful submission
                    setSuccessMessage('Comment submitted successfully');
                    setFullName('');
                    setMessage('');
                } else {
                    // Handle error, e.g., show an error message
                    setSuccessMessage('Failed to submit comment');
                }
            })
            .catch(error => {
                console.error('Error submitting comment:', error);
                setSuccessMessage('An error occurred while submitting the comment');
                setFullName('');
                setMessage('');
            });
    };

    return (
        <section className="py-3 mt-xl-5" id="content">
            {loading ? (
                <div className='d-flex justify-content-center'>
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            ):(
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-12 mx-auto">
                            {/* SEARCH DISPLAY SM */}
                            <div className="row mb-5 d-xl-none shadow-xl">
                                <div className="col-12">

                                    <form action="">
                                        <div className="input-group">
                                            <input type="search" className="form-control" placeholder="Search" aria-label="Search"
                                                aria-describedby="button-addon2" />
                                                <button className="btn btn-info btn-lg" type="button" id="button-addon2">
                                                    <i className="fas fa-search"></i>
                                                </button>
                                        </div>
                                    </form>

                                </div>
                            </div>

                            {article && (
                                <div className="card card-plain">
                                    <div className="card-header p-0 position-relative">
                                        <h4 className="mb-2">{article.title}</h4>
                                        <h6>by MSavvy Admin</h6>
                                        <hr className="border border-dark border-1 opacity-2" />
                                            <div className="d-flex justify-content-between opacity-6">
                                                <h6 className="text-sm">Posted on {new Date(article.post_date).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit'})}</h6>
                                                <h6 className="text-sm"><i className="fas fa-clock text-xs"></i> {article.reading_time} mins read</h6>
                                            </div>
                                            <div className="d-block blur-shadow-image">
                                                <img src={article.image} alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" loading="lazy" />
                                            </div>
                                    </div>
                                    <div className="card-body px-0">
                                        <p className="text-lg fw-semibold lh-base">{article.content}</p>
                                    </div>
                                </div>
                            )}

                            <div className="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-6 mb-5">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                    <div className="bg-gradient-info shadow-info border-radius-lg p-3">
                                        <h5 className="text-white text-primary mb-0">Leave a Comment</h5>
                                    </div>
                                </div>
                                <div className="card-body">
                                    {successMessage && <div className="alert alert-success text-white fw-bold">{successMessage}</div>}
                                    <form id="contact-form" onSubmit={handleSubmit} autoComplete="on">
                                        <div className="card-body p-0 my-3">
                                            <div className="row">
                                                <div className="input-group input-group-static mb-4">
                                                    <label>Full Name</label>
                                                    <input type="text" name="fullName" className="form-control" placeholder="I am ..." value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="form-group mb-0 mt-md-0 mt-4">
                                                <div className="input-group input-group-static mb-4">
                                                    <label>Message</label>
                                                    <textarea name="message" className="form-control" id="message" rows="6" placeholder="I would like to ..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 text-end">
                                                    <button type="submit" className="btn bg-gradient-info mt-3 mb-0">Send Comment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-5 col-lg-8 col-12 mx-auto">
                            {/* SEARCH DISPLAY XL */}
                            {/* <div className="row mt-4 d-xl-block d-none shadow-xl">
                                <div className="col-12">

                                    <form action="">
                                        <div className="input-group">
                                            <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                                <button className="btn btn-info btn-lg" type="button" id="button-addon2">
                                                    <i className="fas fa-search"></i>
                                                </button>
                                        </div>
                                    </form>

                                </div>
                            </div> */}

                            < PopularPosts />

                            < LatestComments />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default ContentPosts;