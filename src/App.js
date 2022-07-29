import { BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
  import React from 'react'
import Routers from'./Routers' 

import styled from 'styled-components'

const BigGeenHeading = styled.h1`
  color: green;
  font-size: 96px;
`

// function App() {
//   return (
//     <>
//       <h1>Server-Side Rendering Example</h1>
//         <ul>
//           <li>
//             <Link to='/' >Home</Link>
//           </li>
//           <li>
//             <Link to='/about' >About</Link>
//           </li>
//           <li>
//             <Link to='/articles' >Articles</Link>
//           </li>
//         </ul>
//        <Routers/>
//     </>
//   );
// }

// export default App;

const App = () => {
  return (
    <>
      <BigGeenHeading>Architecture test</BigGeenHeading>
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
       <Routers/>
    </>
  );
}

export default App;

