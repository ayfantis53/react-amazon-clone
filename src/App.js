import './App.css';
import Home from './Home';
import Login from './Login'
import Header from './Header';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
                <Route path="/login" element={[<Header />, <Login />]}/>
            </Routes>

            <Routes>
                <Route path="/checkout" element={[<Header />, <Checkout />]}/>
            </Routes>

            <Routes>
                <Route path="/" element={[<Header />, <Home />]}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
