import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import './App.css';

import { BrowserRouter ,Routes,Route} 
from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Login from "./components/login";
import Home  from "./components/home";
import Contact  from './components/contact';
import About from './components/about';
import Hero from "./components/hero/hero";
import Head from "./components/hero/head";
import Back from "./components/hero/back";

 function App() {
    return (
       <BrowserRouter>
       <Navbar/>
        <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/hero" element={<Hero/>} />
        {/* <Route path="/head" element={<Head/>} /> */}
        {/* <Route path="/back" element={<Back/>} /> */}
        
        {/* </Route> */}
          </Routes>
       </BrowserRouter> 
  );
}
// root.render(<App/>);
export default App;
