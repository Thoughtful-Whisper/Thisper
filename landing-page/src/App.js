import "./App.css";
import Home from "./components/Home";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Goal from "./components/Goal";
import Install from "./components/Install";

function App() {
  return (
    <div className="App">
      <Home />
      <Problem />
      <Solution />
      <Goal />
      <Install />
    </div>
  );
}

export default App;
