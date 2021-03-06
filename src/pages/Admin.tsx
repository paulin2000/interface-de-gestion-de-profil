import React from 'react';
import MainAdmin from '../pages-components/admin/MainAdmin';
import Header from '../pages-components/components/Header';
import Sidebar from '../pages-components/components/Sidebar';

const Admin = () => {
  return (
    <div className='home'>
      <Header/>
      <Sidebar/>
      <MainAdmin/>
    </div>
  );
};

export default Admin;