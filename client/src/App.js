import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Navigation from "./components/Navigation";
import Scriptures from "./pages/Bible/Scriptures";
import Routes from "./Routes/Routes";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("/api/scriptures/").then(({ data }) => setData(data));
  }, []);

  return (
    <>
      <Navigation />
      <Container maxWidth="lg">
        <Routes data={data} />
      </Container>
    </>
  );
}
