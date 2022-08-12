import React from "react";
import Container from "@mui/material/Container";
import Navigation from "../../components/Navigation";
import Scriptures from "../Bible/Scriptures";

export default function Home({ data }) {
  return (
    <>
      <Navigation />
      <Container maxWidth="lg">
        <Scriptures data={data} />
      </Container>
    </>
  );
}
