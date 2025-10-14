import { Route, Routes } from "react-router";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Registration from "./pages/Registration";
import RegistrationFormOne from "./components/RegistrationFormOne";
import RegistrationFormTwo from "./components/RegistrationFormTwo";
import RegistrationFormThree from "./components/RegistrationFormThree";
import DashboardLayout from "./components/DashboardLayout";
import Calendar from "./pages/Calendar";
import Create from "./pages/Create";
import Team from "./pages/Team";
import Analyze from "./pages/Analytics";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        
        <Route path="agency-registration" element={<Registration />}>
          <Route index element={<RegistrationFormOne />} />
          <Route path="owner-details" element={<RegistrationFormTwo />} />
          <Route path="password" element={<RegistrationFormThree />} />
        </Route>
        
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Calendar />}/>
          <Route path="create" element={<Create />}/>
          <Route path="team" element={<Team />}/>
          <Route path="analytics" element={<Analyze />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
