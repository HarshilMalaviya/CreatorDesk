import { Route, Routes } from "react-router";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Registration from "./pages/Registration";
import AgencyForm from "./components/AgencyForm";
import OwnerDetails from "./components/OwnerDetails";
import Password from "./components/Password";
import Calendar from "./pages/Calendar";
import Create from "./pages/Create";
import Team from "./pages/Team";
import Analyze from "./pages/Analytics";
import CalendarLayout from "./layout/CalendardLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        
        <Route path="agency-registration" element={<Registration />}>
          <Route index element={<AgencyForm />} />
          <Route path="owner-details" element={<OwnerDetails />} />
          <Route path="password" element={<Password />} />
        </Route>
        
        <Route path="calendar" element={<CalendarLayout />}>
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
