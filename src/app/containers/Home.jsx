import React from 'react';
import Banner from '../components/home/banner/Banner';
import TrendCategories from '../components/home/catagories/TrendCategories';
import Layout from '../components/Layouts/Layout';

const Home = () => {
  return (
    <Layout>
      <Banner />
      <TrendCategories />
    </Layout>
  );
};

export default Home;
