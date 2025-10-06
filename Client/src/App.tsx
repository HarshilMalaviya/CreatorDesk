import { Route, Routes } from "react-router";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Registration from "./pages/Registration";
import RegistrationFormOne from "./components/RegistrationFormOne";
import RegistrationFormTwo from "./components/RegistrationFormTwo";
import RegistrationFormThree from "./components/RegistrationFormThree";

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

      </Routes>
    </>
  );
};

export default App;
