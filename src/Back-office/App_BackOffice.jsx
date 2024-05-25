import './App_BackOffice.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './User';
import Order from './Order';
import { useEffect, useState } from 'react';

function App_BackOffice() {
  const [toggle, setToggle] = useState(false);
  function Toggle(){
    setToggle(!toggle);
  }

  useEffect(()=> {
    const handleSize = () => {
      if(window.innerWidth > 768) {
        setToggle(false);
      }

      window.addEventListener('resize', handleSize);

      return() => {
        window.addEventListener('resize', handleSize);
      }
    }
  }, [])

  return (
    <BrowserRouter>
        <div className="d-flex">
          <div className={toggle ? "d-none" : "w-auto position-fixed"}>
            <Sidebar />
          </div>
          <div className={toggle ? "d-none" : "invisible"}>
            <Sidebar />
          </div>
          <div className='col overflow-auto'>
            <Navbar Toggle={Toggle}/>
               <Routes>
                   <Route path='/' element={<Home />}></Route>
                   <Route path='/Users' element={<User />}></Route>
                   <Route path='/Orders' element={<Order />}></Route>
               </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App_BackOffice
