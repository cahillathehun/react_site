import Navbar from './navbar';
import Home from './Home';
import Poems from './Poems';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return (
    <Router>
        <div className="App">
            <Navbar/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/poems" element={<Poems />}/>
                </Routes>
            </div>
        </div>
    </Router>
  );
}

export default App;
