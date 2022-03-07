import React from 'react';
import Header from '../pages-components/components/Header';
import Sidebar from '../pages-components/components/Sidebar';

const PageNotFound = () => {
  return (
    <div className='home notfound'>
      <Header/>
      <Sidebar/>
      <div className="main">
        <h5>Erreur 404: Page not found</h5>
      </div>
    </div>
  );
};

export default PageNotFound;