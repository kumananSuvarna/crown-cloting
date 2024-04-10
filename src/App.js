import Homepage from './pages/Homepage.component';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HatsPage.toUpperCase()</h1>
  </div>
)

function App() {
  return (
    <div >
<BrowserRouter>
<Routes>

  <Route exact path='/' Component={Homepage} />

  <Route exact path='/HatsPage' Component={HatsPage} />
</Routes>
</BrowserRouter>


  
    </div>
  );
}

export default App;
