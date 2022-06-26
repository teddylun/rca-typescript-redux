import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './containers/Checkout';
import ProductList from './containers/ProductList';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<ProductList />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
