// File: src/App.jsx
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import GetQuoteCta from "./components/cta/GetQuoteCta";


export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-24">
        <Outlet />
      </main>
       <GetQuoteCta to="/quote" />
      <Footer />
    </div>
  );
}