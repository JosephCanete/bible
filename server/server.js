const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const app = express();
require("dotenv").config();

//API
const BOOKS = require("./api/Book/books");
const VERSES = require("./api/Verses/verses");

app.use(cors());

app.get("/", (request, response) => {
  response.json(
    "Available endpoints are [/api/books], [/api/books/old-testimenst], [/api/books/new-testimenst]"
  );
});

app.get("/api/books", (request, response) => {
  response.json(BOOKS);
});

app.get("/api/books/new-testiments", (request, response) => {
  response.json(BOOKS.NEW_TESTIMENTS);
});

app.get("/api/books/old-testiments", (request, response) => {
  response.json(BOOKS.OLD_TESTIMENTS);
});

app.get("/api/passage/genesis", (request, response) => {
  response.json(VERSES.GENESIS);
});

app.listen(PORT, console.log(`Our server is listening at PORT ${PORT}`));
