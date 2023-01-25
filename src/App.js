import './assets/css/style.css';
import 'animate.css';
import Home from './pages/Home';
import Header from  './layouts/Header' ;
import Footer from  './layouts/Footer' ;
import AOS from 'aos';
import 'aos/dist/aos.css';
import Prototype from './components/modal/Prototype';
// import ReactGA from 'react-ga';

// ReactGA.initialize('G-88BWY6T3X9');
// ReactGA.pageview(window.location.pathname + window.location.search);

AOS.init();

function App() {
  return (
    <>
      <Prototype show={false} />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
