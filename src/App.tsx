import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import PlanetFacts from './pages/PlanetFacts';

const App = () => {
  return (
    <div className='bg-black-600 bg-starry-pattern w-full min-h-screen'>    
      <Routes>
        <Route path='/home' element={<Landing />} ></Route>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/:planetId' element={<PlanetFacts />} ></Route>
      </Routes>     
    </div>
  )
};

export default App;

/*

*/