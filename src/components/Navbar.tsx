import { useState, useEffect } from "react"; // import state
import Scene from "./ParticleScene";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  

  useEffect(() => {
    console.log(isNavOpen);
  }, [isNavOpen]);

  return (

    <div className = "justify-end pt-8 m-0 pr-8" >
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
          
            {/* Sidebar content here */}
          <ul className="menu absolute right-4 grid cols-6 w-screen h-full bg-base-200 ">
            <div className = "absolute w-screen h-screen overflow-visible" >
              <Scene />
            </div>
            <ul className = "absolute right-96 bottom-1/2 text-right flex flex-col gap-24">

              <li className = " "><a className="bg-white bg-opacity-60">About</a></li>
              <li className = " "><a className="bg-white bg-opacity-60">Portfolio</a></li>
              <li className = " "><a className="bg-white bg-opacity-60">Contact</a></li>
            
            </ul>
            
          </ul>
        </div>
      </div>
      
      
    </div>
  );
}