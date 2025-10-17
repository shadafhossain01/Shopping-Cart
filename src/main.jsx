import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart.jsx';
import Home from './pages/Home/Home.jsx';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>}/>
     </Route>
    </Routes>
  </BrowserRouter>
);
