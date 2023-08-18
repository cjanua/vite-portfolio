import { useProgress } from "@react-three/drei";
import { Progress } from "@/components/ui/progress"

export default function Loader(){
  const progress = useProgress()
  return (
    <>
      <Progress value = {progress.progress} />
    </>
  )
}