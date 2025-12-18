import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import NotFound from "../pages/NotFound";
import Landing from "@/pages/Landing";
import Home from "@/pages/Home";
import ProtectedRoute from "@/routes/ProtectedRoute";
import Festivals from "../pages/Festivals";
import Hotels from "../pages/Hotels";
import Calendar from "../pages/Calendar";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Home (shows booking but protected when clicking Book) */}
      <Route path="/" element={<Landing />}>
        <Route index element={<Home />} />
      </Route>

      {/* Home route for authenticated users */}
      <Route path="/home" element={<Landing />}>
        <Route index element={<Home />} />
      </Route>

      {/* Auth Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Festivals */}
      <Route path="/festivals" element={<Festivals />} />

      {/* Hotels */}
      <Route path="/hotels" element={<Hotels />} />

      {/* Calendar */}
      <Route path="/calendar" element={<Calendar />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}
