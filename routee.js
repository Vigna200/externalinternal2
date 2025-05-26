import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Home from './home';
export default function Navigate(){
    return(
    <Router>
        <div>
        <nav style={{padding:10,backgroundColor:'grey'}}>
            <ul style={{display:'flex',justifyContent:'flex-start',gap:5,listStyleType:'none'}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    </div>
    </Router>
    )
}