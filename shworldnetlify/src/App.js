// import
import { Route, Routes } from 'react-router-dom';
import './App.css';

// import compo 
import Header from './compo/00.Header.js'
import Door from './compo/01.Door';
import Main from './compo/02.Main';
import Join from './compo/03.Join';
import Login from './compo/04.Login';

function App() {

  return (
    <>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Door></Door>}></Route>
        <Route path='/Main' element={<Main></Main>}></Route>
        <Route path='/Join' element={<Join></Join>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
      </Routes>

    </>
  );
}

export default App;