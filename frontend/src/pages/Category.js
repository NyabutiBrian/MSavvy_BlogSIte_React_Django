import React, { useEffect } from 'react';
import Navbar from "../layouts/categories/Navbar";
import CarouselSlider from "../layouts/categories/CarouselSlider";
import CategoryPosts from "../layouts/categories/CategoryPosts";
import Footer from "../components/Footer";

function Category() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return(
        <React.StrictMode>
            < Navbar />
            <CarouselSlider />
            <div class="card card-body shadow-blur mx-3 mx-md-4 mt-md-n6 mt-sm-n7 mt-n7">
                <CategoryPosts />
            </div>
            <Footer />
        </React.StrictMode>
    );
}

export default Category;