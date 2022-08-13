import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ActionMenu from "../../components/ActionMenu";
import "./Scriptures.scss";

export default function Scriptures({ data }) {
  const [selectedIndex, setSelectedIndex] = useState("");
  const [toggle, setToggle] = useState(false);
  const [verse, setVerse] = useState({
    book: "",
    chapter: "",
    verse: "",
  });

  useEffect(() => {
    //If toggled something we want to show modal
    toggle && console.log("selected something");
  }, [toggle]);

  const passageSelectedHandler = (event, index) => {
    setToggle(!toggle);
    setSelectedIndex(index);
    setVerse({
      book: data.book,
      chapter: data.chapter,
      verseNumber: index + 1,
      verseContent: event.target.innerText,
    });
    // console.log(data.content.scriptures.passage[index]);
    console.log(data.book);
  };

  return (
    <>
      {data ? (
        <Box sx={{ my: "2rem" }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper elevation={5} sx={{ p: "2rem" }}>
                <Typography variant="h3">
                  {data.book} {` `}
                  {data.chapter}
                </Typography>
                <Typography variant="h5" sx={{ py: "1rem" }}>
                  {data.content.scriptures.title}
                </Typography>
                {data &&
                  data.content.scriptures.passage.map((item, index) => (
                    <Typography
                      variant="subtitle1"
                      className="passage--content"
                      key={index}
                      onClick={(event) => passageSelectedHandler(event, index)}
                      style={{
                        textDecoration:
                          selectedIndex === index && toggle
                            ? "underline"
                            : "none",
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      ) : (
        "loading"
      )}
      {<ActionMenu isOpen={toggle} setIsOpen={setToggle} verse={verse} />}
    </>
  );
}
