
import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
import Routers from'./Routers' 

import Home from "./pages/Home";

function App() {
  return (
    <Router className="App">
      <h1>Server-Side Rendering Example</h1>
        <ul>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <Link to='/about' >About</Link>
          </li>
          <li>
            <Link to='/articles' >Articles</Link>
          </li>
        </ul>
       <Routers />
    </Router>
  );
}

export default App;
