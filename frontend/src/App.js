import { BrowserRouter, Router } from "react-router-dom";
import Routess from "./Routess/Routess";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routess />
      </BrowserRouter>
    </div>
  );
}

export default App;
