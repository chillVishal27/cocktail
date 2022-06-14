
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import NavBar from './NavBar';
import About from './About';
import Displayallinfo from './Displayallinfo';
function App() {
  return (
  <>
  <Router>
      <Routes>
        <Route path="/" element={<NavBar/>}></Route>
        <Route path="About" element={<About/>}></Route>
        <Route path="displayinfo" element={<Displayallinfo/>}></Route>
        <Route path="*" element={<NavBar/>}></Route>
      </Routes>
  </Router>
  </>
  );
}

export default App;
