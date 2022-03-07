import Sidebar from '../pages-components/components/Sidebar';
import Header from '../pages-components/components/Header';
import Main from '../pages-components/components/Main';

const Home = () => {
  return (
    <div className="home">
      <Header/>
      <Sidebar/>
      <Main/>
    </div>
  );
};

export default Home;