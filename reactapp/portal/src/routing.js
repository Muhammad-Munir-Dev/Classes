import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './screens/login'
import Signup from './screens/signup'
import Dashboard from './screens/dashboard'
import Profile from './screens/profile'
import Report from './screens/report'
import Order from './screens/order'

function AppRouter() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="profile/:name" element={<Profile />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="" element={<Report />} />
            <Route path="orders" element={<Order />} />
          </Route>
          <Route path="/*" element={<h1>4O4</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;