import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './screens/login'
import Signup from './screens/signup'
import Dashboard from './screens/dashboard'

function AppRouter() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<h1>4O4</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;