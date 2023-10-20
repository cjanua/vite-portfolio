import { Canvas } from '@react-three/fiber'
import './App.css'
import { Suspense} from 'react';
import CarExperience from './components/CarExperience';



function App() {
  return (
    <>
      
      <div className = "bg-black h-screen m-0 p-0 -z-10" >
        
        <div className = "h-full">
          
          <div className = "h-screen w-screen absolute right-0">
            <Canvas shadows > 
              <Suspense  fallback = {null}> 

                <CarExperience />
              </Suspense>
            </Canvas>
          </div>
          
          
        </div>
      </div>
    </>
    
  );
}
export default App;