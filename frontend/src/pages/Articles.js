import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Footer from "../components/Footer";
import Navbar from "../layouts/postpage/Navbar";
import CarouselSlider from "../layouts/categories/CarouselSlider";
import ContentPosts from "../layouts/postpage/ContentPosts";

function Articles() {

    useEffect(() => {
        window.scrollTo(0, 0);
        ReactGA.pageview(window.location.pathname);
    }, []);
    
    return(
        <React.StrictMode>
            < Navbar />
            <CarouselSlider />
            <div class="card card-body shadow-blur mx-3 mx-md-4 mt-md-n6 mt-sm-n7 mt-n7">
                < ContentPosts />
            </div>
            <Footer />
        </React.StrictMode>
    );
}

export default Articles;