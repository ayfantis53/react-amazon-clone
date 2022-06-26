import './App.css';
import Home from './pages/Home';
import Login from './pages/Login'
import Checkout from './pages/Checkout';
import Header from './components/Header';
import Footer from './components/Footer';
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
                <Route path="/" element={[<Header />, <Home />, <Footer />]}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
