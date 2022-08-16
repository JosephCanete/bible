import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Navigation from "./components/Navigation";
import Routes from "./Routes/Routes";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./state/index";

export default function App() {
  const [data, setData] = useState();
  useEffect(() => {
    try {
      axios.get("/api/scriptures/").then(({ data }) => setData(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const AC = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <Navigation />
      <Container maxWidth="lg">
        <Routes data={data} />
      </Container>
    </>
  );
}
