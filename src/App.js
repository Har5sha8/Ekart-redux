// import logo from './logo.svg';
import './App.css';
import WishList from './Pages/WishList';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />

     
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/cart' element={<Cart />} />



      </Routes>

      <Footer />
    </div>
  );
}

export default App;
