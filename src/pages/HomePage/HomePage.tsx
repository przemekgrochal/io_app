import MainLayoutComponent from '../../layouts/MainLayoutComponent';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import './style/HomePage.scss';

const HomePage = () => {
 
  return (
      <main>  
        <Header/>
        <div className="content">
          <MainLayoutComponent/>
        </div>
        <Footer/>
      </main>
  );
};

export default HomePage;
