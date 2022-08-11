import React from "react";
import Container from "@mui/material/Container";
import Navigation from "../../components/Navigation";
import Passage from "../Bible/Passage";

export default function Home() {
  return (
    <>
      <Navigation />
      <Container maxWidth="lg">
        <Passage />
      </Container>
    </>
  );
}
