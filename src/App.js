// import Navbar from './Navbar';
// import Signin from './signin';

// function App() {
  
//   return ( 
//     <div className="App">
//       <Navbar />
//       <div className="content">
//       <Signin />
//       </div>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Signin from './signin';
import Signup from './signup';


function App() {
  
  return ( 
    <Router>
      <Navbar />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />


        
      </Routes>
    </Router>
  );
}

export default App;
