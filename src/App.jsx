
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home/Home.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;