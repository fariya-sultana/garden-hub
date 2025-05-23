import React from 'react';
import Banner from '../Components/Banner';
import FeaturedGardeners from '../Components/FeaturedGardeners';
import TrendingTips from '../Components/TrendingTips';
import ChooseUs from '../Components/ChooseUs';
import About from '../Components/About';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>GardenHub | Home</title>
            </Helmet>
           <Banner></Banner>
           <FeaturedGardeners></FeaturedGardeners>
           <TrendingTips></TrendingTips>
           <About></About>
           <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;