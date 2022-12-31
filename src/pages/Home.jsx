import React from 'react';

// import components
import HouseList from '../components/Home/HouseList';
import Banner from '../components/Home/Banner';

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner />
      <HouseList />
    </div>
  );
};

export default Home;
