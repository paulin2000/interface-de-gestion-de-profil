import React from 'react';
import Header from '../pages-components/components/Header';
import Sidebar from '../pages-components/components/Sidebar';
import MainShipper from '../pages-components/shipper/MainShipper';

const Shipper = () => {
  return (
    <div className='home'>
      <Header/>
      <Sidebar/>
      <MainShipper/>
    </div>
  );
};

export default Shipper;