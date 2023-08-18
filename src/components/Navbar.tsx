import { useState, useEffect } from "react"; // import state
import Scene from "./ParticleScene";
import useMousePosition from "./useMousePosition";
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const { clientX, clientY } = useMousePosition();

  useEffect(() => {
    console.log(isNavOpen);
  }, [isNavOpen]);

  return (

    <div className = "bg-black  flex justify-end pt-8 m-0 pr-8" >
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-end z-20">
          {/* Page content here */}
          <label htmlFor="my-drawer-4"  onClick={() => {setIsNavOpen(!isNavOpen)}} className="drawer-button btn btn-circle swap swap-rotate">
    
              {/* this hidden checkbox controls the state */}
              <input type="checkbox"/>
              

              {/* hamburger icon */}
              
              <svg className=" swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                {!isNavOpen ? <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/> : <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>}
                
              </svg>           
            </label>
        </div> 
        <div className="drawer-side w-screen z-10 overflow-x-clip overflow-y-clip">
          <label htmlFor="my-drawer-4" className="drawer-overlay w-screen to-background "></label>
          <ul className="menu absolute right-0 grid cols-6 w-full h-full bg-base-200 ">
            {/* Sidebar content here */}

            <div className = "absolute w-full h-full pl-96" style = {{
              left: (clientX - window.innerWidth / 2)*0.04,
              top: (clientY - window.innerHeight / 2)*0.02,
            }}>
              <Scene />
            </div>
            
            <li className = "p-8 w-1/12 pl-16"><a></a></li>
            <li className = "p-8 w-1/12 pl-16"><a></a></li>
            <li className = "p-8 w-1/12 pl-64"><a>About</a></li>
            <li className = "p-8 w-1/12 pl-64"><a>Portfolio</a></li>
            <li className = "p-8 w-1/12 pl-64"><a>Contact</a></li>
            <li className = "p-8 w-1/12 pl-16"><a></a></li>
            <li className = "p-8 w-1/12 pl-16"><a></a></li>
            <li className = "p-8 w-1/12 pl-16"><a></a></li>
          </ul>
        </div>
      </div>
      
      
    </div>
  );
}