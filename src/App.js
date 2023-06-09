import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Content className="wrapper" />
    </div>
  );
}

export default App;
