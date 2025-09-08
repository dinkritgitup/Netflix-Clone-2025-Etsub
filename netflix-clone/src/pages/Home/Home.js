import React from 'react';
import Header from '../../components/Header/Header/Header'
import Banner from "../../components/Banner/Banner";

import Footer from '../../components/Footer/Footer'
import RowList from '../../components/Rows/RowList/RowList';
import UpcomingCalendar from '../../components/Calendar/Calendar';

const Home = () => {
  return (
    <>
     <Header/>
     <Banner/>
     <UpcomingCalendar />
     <RowList/>
     <Footer/>
    </>
  );
}

export default Home;
