import Navbar from './navbar';
import About from './about';
import Footer from './footer';
import Hero from './hero';
import Services from './services';
import { PiArrowElbowUpLeftBold } from 'react-icons/pi';
import Banner from './banner';
import Video from './video';
import Gaming from './gaming';
import Gift from './gift';

const Home = () => {
  return (
    <div>
      
      <Hero />
      <Services />
      <Banner />
      <Gaming />
      <Gift />
    </div>
  );
};

export default Home;