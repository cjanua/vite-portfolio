import ReactTyped from "react-typed";

export function HomeText() {
  return(
    <div className = "w-screen -z-20">
      <div className="hero min-h-screen ">
        <div className="hero-content text-center relative bottom-1/4 right-1/4 slide-in-from-right-96">
          <div className="max-1/2">
            
            <p className="font-mono text-white pb-2">Hello World, I'm</p>

            <h1 className="font-mono text-5xl font-bold pb-4 text-white">Chris Januario</h1>
            <ReactTyped className = "font-mono text-2xl pt-16 font-bold text-white" strings={["Software Developer", "Frontend Dev", "Problem-Solver", "Mathematician", "Full-Stack Developer", "AI and Machine Learning Dev", "FinTech Dev", "Python Developer", "Backend Dev", "Data Analyst", "Physicist", "Software Engineer", "Node.js Developer", "Quick Learner", "JavaScript", "TypeScript", "React Developer", "Game Dev", "Databases", "Jack of All Trades"]} typeSpeed={80} loop />
            <h2 className="font-mono text-3xl py-6 text-white"></h2>
          </div>
        </div>
      </div>
    </div>
);
}