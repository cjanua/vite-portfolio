import { useState, useEffect } from "react"; // import state
import Scene from "./ParticleScene";
import { Button } from "@/components/ui/button";
import {
  AiFillCaretDown,
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillCaretUp,
} from "react-icons/ai";
import {
  PiArrowsClockwiseFill,
  PiArrowsCounterClockwiseFill
} from "react-icons/pi";
import {
  BiPointer
} from "react-icons/bi";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  useEffect(() => {
    console.log(isNavOpen);
  }, [isNavOpen]);

  const Drawer = () => {
    return (
      <div className="drawer-side w-screen z-10">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        {/* Sidebar content here */}
        <ul className="menu absolute grid cols-6 w-screen h-full bg-base-200 ">
          <div className="absolute w-screen h-screen overflow-visible">
            {isNavOpen ? <Scene /> : <></>}
          </div>

          <div className="pt-16 justify-center text-right flex flex-row z-10 gap-96">
            <Button className="mt-64  opacity-80 hover:opacity-100 active:bg-black w-24 transition duration-300 ease-in-out">
              <div className="">About</div>
            </Button>
            <Button className=" opacity-80 hover:opacity-100 active:bg-black w-24  transition duration-300 ease-in-out">
              <div className="">Portfolio</div>
            </Button>
            <Button className="mt-64 opacity-80 hover:opacity-100 active:bg-black w-24 transition duration-300 ease-in-out">
              <div className="">Contact</div>
            </Button>
          </div>
          <div className="z-20 w-32 h-32 absolute bottom-0 m-8 border p-4 opacity-70 rounded-md bg-zinc-700 grid grid-cols-3 content-between">
            <div className="w-fit"></div>
            <div className="w-fit">
              <AiFillCaretUp />
            </div>
            <div className="w-fit"></div>
            <div className="w-fit "><PiArrowsClockwiseFill/></div>
            <div className="w-fit text-xs -mt-3 -ml-1">size +</div>
            <div className="w-fit ml-3"> <PiArrowsCounterClockwiseFill/></div>
            <div className="w-fit">
              <AiFillCaretLeft />
            </div>
            <div className="w-fit"><BiPointer/></div>
            <div className="w-fit">
              <AiFillCaretRight />
            </div>
            <div className="w-fit"></div>
            <div className="w-fit text-xs -mb-3 -ml-1">size -</div>
            <div className="w-fit"></div>
            <div className="w-fit"></div>
            <div className="w-fit">
              <AiFillCaretDown />
            </div>
          </div>
        </ul>
      </div>
    );
  };
  return (
    <div className="justify-end pt-8 m-0 pr-8">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-end z-20">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
            className="drawer-button btn btn-circle swap swap-rotate"
          >
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* hamburger icon */}

            <svg
              className=" swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              {!isNavOpen ? (
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              ) : (
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              )}
            </svg>
          </label>
        </div>
        <Drawer />
      </div>
    </div>
  );
}
