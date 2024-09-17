import '../../App_BackOffice';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  
        <div className="d-flex">
          <div className={toggle ? "d-none" : "w-auto position-fixed"}>
            <Sidebar />
          </div>
          <div className={toggle ? "d-none" : "invisible"}>
            <Sidebar />
          </div>
          <div className='col overflow-auto'>
            <Navbar Toggle={Toggle}/>
               <h1>ola fornecedor</h1>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae doloremque veniam provident ut exercitationem
                 nam voluptatem! Minus enim unde eum non, ut saepe, nemo incidunt voluptatibus, aspernatur dolorem dolorum nesciunt!</p>
          </div>
        </div>
  );
}

export default App_BackOffice
