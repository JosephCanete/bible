import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home/Home";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("/api/scriptures/genesis").then(({ data }) => setData(data));
  }, []);

  return <Home data={data} />;
}
