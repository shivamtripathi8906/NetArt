import './App.css';
import { Routes, Route } from 'react-router';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element = {<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
