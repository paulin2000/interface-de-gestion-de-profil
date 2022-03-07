import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const AccesError = () => {
  return (
    <div className='home access-error'>
      <Header/>
      <Sidebar/>
      <div className="main">
        <h5>Vous n'êtes pas autorisé à consulter cette page</h5>
      </div>
    </div>
  );
};

export default AccesError;