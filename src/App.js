import './App.css';
//import './bootstrap.css'
//import './bootstrap.css'
import { Login } from './componentmyap/login/login'
import { Route, Routes } from 'react-router-dom';
import { Home } from './componentmyap/home';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
