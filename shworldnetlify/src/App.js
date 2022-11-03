// import
import { Route, Routes } from 'react-router-dom';
import './App.css';

// import compo 
import Header from './compo/00.Header.js'
import Door from './compo/01.Door';
import Resume from './compo/02.Resume';
import Project1 from './compo/03.Project1';
import Project2 from './compo/04.Project2';

function App() {

  return (
    <>
      {/* <Header></Header> */}

      <Routes>
        
        {/* <Route path='/' element={<Door></Door>}></Route> */}
        <Route path='/' element={<Resume></Resume>}></Route>
        {/* <Route path='/Project1' element={<Project1></Project1>}></Route>
        <Route path='/Project2' element={<Project2></Project2>}></Route> */}

      </Routes>

    </>
  );
}

export default App;