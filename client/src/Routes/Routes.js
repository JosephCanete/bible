import { Routes as MyRoutes, Route } from "react-router-dom";
import Home from "../pages";
import Scriptures from "../pages";
import About from "../pages";

export default function Routes() {
  return (
    <MyRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/Scriptures" element={<Scriptures />} />
      <Route path="/About" element={<About />} />
    </MyRoutes>
  );
}
