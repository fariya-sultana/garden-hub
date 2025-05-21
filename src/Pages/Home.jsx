import React from 'react';
import Banner from '../Components/Banner';
import FeaturedGardeners from '../Components/FeaturedGardeners';
import TrendingTips from '../Components/TrendingTips';
import ChooseUs from '../Components/ChooseUs';
import About from '../Components/About';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FeaturedGardeners></FeaturedGardeners>
           <TrendingTips></TrendingTips>
           <About></About>
           <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;