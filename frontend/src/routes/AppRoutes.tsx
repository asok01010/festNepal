import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import Landing from "@/pages/Landing";
import Home from "@/pages/Home";
import Festival from "@/pages/Festivals";
import "../App.css";
import Hotels from "@/pages/Hotels";

export default function AppRoutes() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="/" element={<Landing />}>
        <Route index element={<Home />} />
        <Route path="/festivals" element={<Festival />} />
        <Route path="/hotels" element={<Hotels />} />
      </Route>
    </Routes>
    // </BrowserRouter>
  );
}
