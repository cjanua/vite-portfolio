import { Scroll } from "@react-three/drei";
import Navbar from "./Navbar";
import { HomeText } from "./Info";
import Blob from "./Blob";

export const Overlay = () => {
  return (
    <Scroll html >
      <Blob />
      <Navbar />
      <HomeText />
      
      
    </Scroll>
  );
}