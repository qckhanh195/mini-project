import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuickGame from "./projects/QuickGame";
import Calculator from "./projects/Calculator";
import WeatherApp from "./projects/WeatherApp";
import TodoList from "./projects/TodoList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quick-game" element={<QuickGame />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;