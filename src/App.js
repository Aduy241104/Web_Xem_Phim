import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import HomePage from './PE24/HomePage'
import { Route, Router, Routes } from 'react-router-dom';
import Header from './Page/Header';
import './AssFer.css';
import HomeBody from './Page/HomeBody';
import DescriptionPage from './Page/DescriptionPage';
import AllMovie from './Page/AllMovie';
import WatchMovie from './Page/WatchMovie';






function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <HomeBody /> } />
        <Route path='/DescriptionPage/:id' element={ <DescriptionPage /> } />
        <Route path='/AllMovie' element={ <AllMovie /> } />
        <Route path='/WatchMovie/:movieID' element={ <WatchMovie /> } />
      </Routes>
    </>

  )
}

export default App;
