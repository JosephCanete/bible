import React, { useState, useEffect } from "react";
import axios from "axios";
import { getVerses, functionBased } from "./api/bible";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    console.log(getVerses);
    console.log(functionBased);

    //axios.request(getVerses).then(({ data: response }) => setData(response));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div></div>;
}
