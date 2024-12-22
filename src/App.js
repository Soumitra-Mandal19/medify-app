import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import {MedicalCenterList} from "./pages/MedicalCenterList/MedicalCenterList";
import {BookingsPerHospital} from "./pages/BookingsPerHospital/BookingsPerHospital";


function App() {
  return (
    <div className="App">

      <Router>
      
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/medicalcenters"
            element={<MedicalCenterList />}
          />
          <Route
            path="/bookings"
            element={<BookingsPerHospital/>}
          />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
