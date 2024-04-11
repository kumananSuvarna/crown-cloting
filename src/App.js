import Homepage from './pages/Homepage.component';
import ShopPage from './shop/shop.component';
import './App.css';
import Header from './component/header/header.component';

import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div >
<BrowserRouter>
<Header />
<Routes>

  <Route exact path='/' Component={Homepage} />

  <Route exact path='/Shop' Component={ShopPage} />
</Routes>
</BrowserRouter>


  
    </div>
  );
}

export default App;
