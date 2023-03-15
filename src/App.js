import {Route, Routes} from "react-router-dom";
import Header from './components/Header';
import StudnetDetials from './components/StudnetDetials';
import Performance from './components/Performance';
import PastRecord from './components/PastRecord';
import Status from './components/Status';
import Home from "./components/Home";
import { Brong } from "./components/Brong";





function App() {
  
  return (
    <div style={{}}>
      <Header/> 
      <Home/>
      <Routes>
          <Route path="/" element={<StudnetDetials/>}/>
          <Route path="performance" element={<Performance/>}/>
          <Route path="status" element={<Status/>}/>
          <Route path="pastrecords" element={<PastRecord/>}/>
      </Routes>
    
      <Brong />
    </div>
  );
}

export default App;
