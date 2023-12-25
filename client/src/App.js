import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Component/Website/Navbar";
import Foot from "./Component/Website/Footer";
import CheckoutPage from "./pages/Payment";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import Profile from "./Component/Users/Profile";
import Events from "./pages/Event";
import FlipCard from "./pages/Detail";
import CategoryContent from "./pages/CategoryContent";
import { Ticket } from "./Component/Website/Ticket";
import NotFound from "./pages/NotFound";
import Discripiton from "./Component/Website/Discripiton";
import Quantity from "./Component/Users/Quantity";
import Log from "./pages/Log";
import SignUp from "./pages/SignUp";
import Card from "./Component/Website/Card";
import ProfilePrivate from "./Component/Users/ProfilePrivate";
import OrderTicket from "./Component/Users/OrderTicket";
import OrderEvent from "./Component/Users/OrderEvent";
import DashProfile from "./Component/Pages/DashProfile";
import Payment from "./pages/Payment";
import EidtPorfile from "./Component/EidtPorfile";
import { AuthProvider } from "./AuthContext";


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Nav />
        <div className="h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            {/* <Route path="profile" element={<Profile />} /> */}
            <Route path="contact" element={<ContactUs />} />
            <Route path="login" element={<Log />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="create event" element={<Events />} />
            <Route path="payment/:id/:event" element={<Payment />} />
            <Route path="category/:category" element={<CategoryContent />} />
            <Route path="blog/:id" element={<FlipCard />} />
            <Route path="/ticket/:id" element={<Ticket />} />
            <Route path="*" element={<NotFound />} />
            <Route path="card" element={<Card />} />
            {/* <Route path="profileprivate" element={<ProfilePrivate />} />
            <Route path="orderticket" element={<OrderTicket />} />
            <Route path="orderevent" element={<OrderEvent />} /> */}
            <Route path="eidtPorfile" element={<EidtPorfile />} />
            
            <Route path="profile" element={<DashProfile />}>
            
              <Route path="orderTicket" />
              <Route path="orderEvent" />
              <Route path="profilePrivate" />
              <Route index />
            </Route>

            {/* < Route path="discripiton" element={< Discripiton/>} /> */}
            {/* <Route path="quantity" element={<Quantity />} /> */}
          </Routes>
          
        </div>
        <Foot />
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
