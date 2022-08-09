const getVerses = {
  method: "GET",
  url: "https://ajith-holy-bible.p.rapidapi.com/GetVerses",
  params: { Book: "Genesis", chapter: "1", VerseFrom: "1", VerseTo: "31" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_HOST,
  },
};

const functionBased = () => {
  return {
    method: "GET",
    url: "https://ajith-holy-bible.p.rapidapi.com/GetVerses",
    params: { Book: "Genesis", chapter: "1", VerseFrom: "1", VerseTo: "31" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_HOST,
    },
  };
};

export { getVerses, functionBased };
