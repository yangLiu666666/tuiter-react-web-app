import './App.css';
import Labs from "./labs/index.js";
import HelloWorld from "./labs/a6/hello-world.js";
import Tuiter from "./tuiter";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";


function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route index element={<Labs/>}/>
                  <Route path="/hello" element={<HelloWorld/>}/>
                  <Route path="/tuiter/*" element={<Tuiter/>}/>
              </Routes>
          </div>
      </BrowserRouter>
);
}

export default App;
