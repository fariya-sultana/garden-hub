import React from 'react';
import Banner from '../Components/Banner';
import FeaturedGardeners from '../Components/FeaturedGardeners';
import TrendingTips from '../Components/TrendingTips';
import ChooseUs from '../Components/ChooseUs';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FeaturedGardeners></FeaturedGardeners>
           <TrendingTips></TrendingTips>
           <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;