import Show from "./components/Show"
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
  <BrowserRouter>
<Routes>
  <Route path="/" element={<Show/>}/>
  <Route path="/create" element="aca va a ir el comonente create"/>
  <Route path="/edit/:id" element="aca va air el componente edit"/>
</Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
