import Login from "./componentes/main/Login.js";
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import { UserProvider } from "./componentes/contexts/UserContext.js";
import Body from "./componentes/main/BodyPrincipal.js";
import Register from "./componentes/main/Register.js"
import Home from "./componentes/home/Home.js";

function App() {
  return (

    <UserProvider>
    <Router>
      <Routes>
      <Route path='*' element={<Navigate to='/home' replace />} />
        
        <Route path="/login" element={<Body><Login /></Body>} />
       
        <Route path="/register" element={<Body><Register /> </Body>}/>

        <Route path="/home" element={<Home />}/>
        
      </Routes>
    </Router>
  </UserProvider>

  );
}

export default App;
