import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart.jsx';
import Home from './pages/Home/Home.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import User from "./pages/User/User.jsx"
import Post from "./pages/Post/Post.jsx"

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/post" element={<Post />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
