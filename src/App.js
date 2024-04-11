import Homepage from './pages/Homepage.component';
import ShopPage from './shop/shop.component';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div >
<BrowserRouter>
<Routes>

  <Route exact path='/' Component={Homepage} />

  <Route exact path='/Shop' Component={ShopPage} />
</Routes>
</BrowserRouter>


  
    </div>
  );
}

export default App;
