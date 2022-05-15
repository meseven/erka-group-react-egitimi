import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Menu from "./components/Menu";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Router />
    </BrowserRouter>
  );
}

export default App;
