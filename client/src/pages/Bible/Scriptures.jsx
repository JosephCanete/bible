import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "./Scriptures.scss";

export default function Scriptures({ data }) {
  const [selected, setSelected] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState("");

  const passageSelectedHandler = (event, index, item) => {
    setSelected(!selected);
    setSelectedIndex(index);
  };

  return (
    <>
      {data ? (
        <Box sx={{ my: "2rem" }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper elevation={5} sx={{ p: "2rem" }}>
                <Typography variant="h2">{data.book}</Typography>
                <Typography variant="h5" sx={{ py: "1rem" }}>
                  {data.content.scriptures.title}
                </Typography>
                {data &&
                  data.content.scriptures.passage.map((item, index) => (
                    <Typography
                      variant="subtitle1"
                      className="passage--content"
                      key={index}
                      onClick={(event) =>
                        passageSelectedHandler(event, index, item)
                      }
                      style={{
                        textDecoration:
                          selectedIndex === index ? "underline" : "none",
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
    </>
  );
}
