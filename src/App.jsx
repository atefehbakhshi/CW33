import "./App.css";
import AddTask from "./components/AddTask";
import FilterTask from "./components/FilterTask";

function App() {
  return (
    <div className="app">
      <h1 className="title">Tasks</h1>
      <div className="inputs-container">
        <AddTask />
        <FilterTask />
      </div>
    </div>
  );
}

export default App;
