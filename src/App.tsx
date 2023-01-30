import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Planet from './pages/Planet'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/planetId' element={<Planet />} />
      </Routes>     
    </>
  )
}

export default App

/*

*/