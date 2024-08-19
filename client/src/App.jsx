import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="bg-black h-[100vh]">
        <Home />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
