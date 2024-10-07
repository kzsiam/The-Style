import React from 'react';
import Slider from './Campaigns/Slider';
import Campaign from './Campaigns/Campaign';
// import Campaigns from './Campaigns/Campaigns'



const Home = () => {
    return (
        <div className=' mx-auto mt-10'>
            <Slider></Slider>
            <Campaign></Campaign>
        </div>
    );
};

export default Home;