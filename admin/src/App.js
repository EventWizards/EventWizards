import "./App.css";
import { Ticket } from "./Component/DetailTicket";
import HomeDash from "./pages/HomeDash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Log from "./pages/Login";
import { AuthProvider } from "./AuthContext";
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <div className="h-full">
          <Routes>
            <Route path="/ticket/:id" element={<Ticket />} />
            <Route path="login" element={<Log />} />
            <Route path="/" element={<HomeDash />}>
              <Route path="search" />
              <Route path="dashbored" />
              <Route path="users" />
              <Route path="events" />
              <Route path="tickets" />
              <Route path="message" />
              <Route path="ContactEmail" />
            </Route>
          </Routes>
        </div>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
