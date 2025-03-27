import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import RegisterPage from "./RegisterPage";
import Sign from "./sign";
import Dashboard from "./dashboard";
import ForgotPassword from "./fp";
import PartnerPreference from "./PartnerPreference";
import { Vigilance } from "./Vigilance";
import MyProfile from "./MyProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Vigilance" element={<Vigilance />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/fp" element={<ForgotPassword />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/PartnerPreference" element={<PartnerPreference />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fp" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
