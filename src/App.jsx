import "./App.css";
import AddTask from "./components/AddTask";
import FilterTask from "./components/FilterTask";
import ListContainer from "./components/listContainer/ListContainer";

function App() {
  return (
    <div className="app">
      <h1 className="title">Tasks</h1>
      <div className="inputs-container">
        <AddTask />
        <FilterTask />
      </div>
      <ListContainer />
    </div>
  );
}

export default App;
