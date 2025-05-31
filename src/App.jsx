
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home/Home.jsx';
// import Project from './Components/Project/Project.jsx';
import Scene2 from './Components/CursorAnimation/Scene2.jsx';
import Footer from './Components/Footer/Footer.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      {/* <Scene2/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/project" element={<Project/>}/> */}
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;