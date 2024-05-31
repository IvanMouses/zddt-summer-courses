import "./App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default App;
