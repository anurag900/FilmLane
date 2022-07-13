
import "./App.scss";
import {BrowserRouter as Router,Routes,Route}  from "react-router-dom"   
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Temp from "./Components/other/temp";

function App() {
  return(
    <Router> 
    
           <Header  />
    
    <Routes>
        <Route path ="/" element={<Home  />} / >

        <Route path ="/tvshows" element={<Temp head = "Tv Shows" />} / >
        <Route path ="/Movies" element={<Temp head = "Movies"  />} / >
        <Route path ="/Recently_Added" element={<Temp head = "Recently Added" />} / >
        <Route path ="/My_List" element={<Temp head = "My List" />} / >
          
    </Routes>
  
  </Router>
 

  );  
   
}

export default App;
