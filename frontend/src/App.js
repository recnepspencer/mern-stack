import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SiteHeader from "./components/SiteHeader";
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from "./Pages/Register";

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <SiteHeader/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
