import Header from '../pages-components/components/Header';
import Sidebar from '../pages-components/components/Sidebar';
import MainProfil from '../pages-components/profil/MainProfil';

const Profil = () => {
  return (
    <div className='home'>
      <Header/>
      <Sidebar/>
      <MainProfil/>
    </div>
  );
};

export default Profil;