
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import CategoryList from './pages/CategoryList';
import ProductPage from './pages/ProductPage';
import AllUsers from './pages/AllUsers';

function App() {
  return (
    <div className="App">
      
    <Routes>
      
     <Route path='/' element={<Home/>}/>
     <Route path='/productpage/:productId' element={<ProductPage/>}/>
     <Route path='/categories' element={<Category/>}/>
     <Route path='/categorylist/:categoryId' element={<CategoryList/>}/>
     <Route path='/allusers' element={<AllUsers/>}/>
      
    </Routes>
    
   
    </div>
  );
}

export default App;
