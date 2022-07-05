import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Counter />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
