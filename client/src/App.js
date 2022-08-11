import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home/Home";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    // fetch("/api/books/old-testiments").then((response) =>
    //   response.json().then((data) => setData(data))
    // );
    axios.get("/api/passage/genesis").then(({ data }) => setData(data));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <Home />;
}
