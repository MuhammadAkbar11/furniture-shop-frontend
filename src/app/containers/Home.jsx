import React from 'react';
import Banner from '../components/home/banner/Banner';
import TrendCategories from '../components/home/catagories/TrendCategories';
import LinksOverlay from '../components/home/LinksOverlay/LinksOvelay';
import RecentProduct from '../components/home/recentProducts/RecentProduct';
import Layout from '../components/Layouts/Layout';

const Home = () => {
  return (
    <Layout>
      <Banner />
      <TrendCategories />
      <RecentProduct />
      <LinksOverlay />
    </Layout>
  );
};

export default Home;
