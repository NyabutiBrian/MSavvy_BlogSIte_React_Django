import React, { useState, useEffect  } from 'react';
import cover from "../../assets/images/cover.webp";

const LatestComments = () => {

    const [comments, setComments] = useState([]);
    const [displayCount, setDisplayCount] = useState(3); // Initial number of comments to display

    useEffect(() => {
        // Fetch Comments
        fetch('https://msavvy-backend.onrender.com/api/comment/')
            .then(response => response.json())
            .then(data => {
                // Fetch article details for each comment
                const promises = data.map(comment => {
                    return fetch(`https://msavvy-backend.onrender.com/api/article/${comment.article}/`)
                        .then(response => response.json())
                        .then(articleData => {
                            return { ...comment, article: articleData.title };
                        });
                });

                // Resolve all promises
                Promise.all(promises)
                    .then(updatedComments => {
                        setComments(updatedComments);
                    });
            })
            .catch(error => console.error('Error fetching comments:', error));
    }, []);

    const handleLoadMore = () => {
        // Increase the display count to load more comments
        setDisplayCount(displayCount + 5);
    };

  return (
      <div className="card card-plain shadow-lg mt-4 p-4">
          <div className="row">
              <div className="fw-bold">
                  <h4>Latest Comments</h4>
                  <hr className="border border-dark border-1 opacity-2" />
              </div>
          </div>

          {comments.slice().reverse().slice(0, displayCount).map((comment, index) => (
            <div className="row py-2" key={index}>
                <div className="col">
                    <p>"{comment.message}"</p>
                </div>
                <div className="row">
                    <div className="col-sm-2 col-4">
                        <img className="avatar avatar-lg shadow-xl position-relative z-index-2" src={cover} alt="dp" loading="lazy" />
                    </div>
                    <div className="col-sm-10 col-8 d-flex flex-column align-items-start justify-content-center">
                    <h6 className="px-xl-2">{comment.fullname} on article <span className='font-italic text-md text-secondary'>"{comment.article ? comment.article : 'Unknown'}"</span></h6>
                        <h6 className="px-xl-2 text-xs opacity-6 text-end">{new Date(comment.comment_date).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit'})}</h6>
                    </div>
                </div>
                <div>
                    <hr className="border border-dark border-1 opacity-1" />
                </div>
            </div>
          ))}
            {displayCount < comments.length && (
                <button onClick={handleLoadMore} className='btn btn-sm bg-gradient-white text-dark mb-0 me-1 shadow mt-md-0 mt-2'>Load More Comments</button>
            )}

      </div>
  )
}

export default LatestComments;