import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Navigation from "./components/Navigation";
import Routes from "./Routes/Routes";
import { useSelector } from "react-redux";

export default function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("/api/scriptures/").then(({ data }) => setData(data));
  }, []);

  const state = useSelector((state) => state);
  console.log("state here", state);

  return (
    <>
      <Navigation />
      <Container maxWidth="lg">
        <Routes data={data} />
        {/* <ActionMenu /> */}
      </Container>
    </>
  );
}
