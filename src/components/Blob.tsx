import './Blob.css'
import useMousePosition  from './useMousePosition';

export default function Blob(){
  const { clientX, clientY } = useMousePosition();
  
  return(
    <div id = "blob" style = {{
      left: (screen.width / 2 - 125) + (clientX - screen.width / 2)*0.85,
      top: (screen.height / 2 - 125) + (clientY - screen.height / 2)*0.85,
    }}>
    </div>
  );
}