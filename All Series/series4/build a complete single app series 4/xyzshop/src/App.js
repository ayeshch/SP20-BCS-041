//import ReactDOM from "react-dom/client";
import TopMenu from './components/TopMenu';
import React from 'react';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Product from './components/Products/product';
import ContactUs from './components/ContactUs';
import LandingPage from './components/LandingPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
       <div className="App">
       <TopMenu />
       <div style={{padding: "10px"}}>
      <Routes>
        {/* <Route path="/product" element={<Product />} />
       */}
        <Route path="/LandingPage" element={<LandingPage/>} />  
        <Route path="/product" element={<Product />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/" element={<LandingPage/>} />
        <Route path="*" element={<NotFound/>} />
       
      </Routes>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
