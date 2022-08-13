import { Routes as MyRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Scriptures from "../pages/Bible/Scriptures";
import About from "../pages/About/About";

export default function Routes({ data }) {
  return (
    <MyRoutes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Scriptures data={data} />} />
      <Route path="/bible" element={<Scriptures data={data} />} />
      <Route path="/About" element={<About />} />
    </MyRoutes>
  );
}
