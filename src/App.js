import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Customer from './Pages/Customer/Customer';
import FrontierPage from './Pages/FrontierPage/FrontierPage';
import Generative from './Pages/Generative/Generative';
import MainPage from './Pages/MainPage/MainPage';
import ScalePage from './Pages/ScalePage/ScalePage';

function App() {
  return (
   <>
   <Navbar/>
   <MainPage/>
   <FrontierPage/>
   <ScalePage/>
   <Generative/>
   <Customer/>
   <Footer />
   </>
  );
}

export default App;
