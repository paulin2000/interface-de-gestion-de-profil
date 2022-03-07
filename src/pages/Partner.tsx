import React from 'react';
import Header from '../pages-components/components/Header';
import Sidebar from '../pages-components/components/Sidebar';
import MainPartner from '../pages-components/partner/MainPartner';

const Partner = () => {
  return (
    <div className='home'>
      <Header/>
      <Sidebar/>
      <MainPartner/>
    </div>
  );
};

export default Partner;