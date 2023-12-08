import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Header from '../layouts/landingpage/Header';
import Navbar from '../layouts/landingpage/Navbar';
import HotTopics from '../layouts/landingpage/HotTopics';
import FeaturedPosts from '../layouts/landingpage/FeaturedPosts';
import RecentPosts from '../layouts/landingpage/RecentPosts';
import ContactUs from '../layouts/landingpage/ContactUs';
import Footer from '../components/Footer';

function Landing() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
      <Navbar />
      <Header />

      <div className="card card-body shadow-blur mx-3 mx-md-4 mt-md-n6 mt-sm-n7 mt-n7">
        < HotTopics />
        < FeaturedPosts />
        < RecentPosts />
        < ContactUs />
      </div>
      
      < Footer />
    </div>
  );
}

export default Landing;
