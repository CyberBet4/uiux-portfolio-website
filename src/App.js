import './assets/css/style.css';
import 'animate.css';
import Home from './pages/Home';
import Header from  './layouts/Header' ;
import Footer from  './layouts/Footer' ;
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
