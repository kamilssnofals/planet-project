import About from './components/About'
import Developers from './components/Developers'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Subscribe from './components/Subscribe'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Developers/>
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default App;