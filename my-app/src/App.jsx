import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
function App() {
  return (
      <div>

<Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
       </Routes>  
</Router>
      </div>
  );
}

export default App
