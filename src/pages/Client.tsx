import React from 'react';
import MainClient from '../pages-components/client/MainClient';
import Header from '../pages-components/components/Header';
import Sidebar from '../pages-components/components/Sidebar';

const Client = () => {
  return (
    <div className='home'>
      <Header/>
      <Sidebar/>
      <MainClient/>
    </div>
  );
};

export default Client;