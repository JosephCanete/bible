import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Scriptures({ data }) {
  return (
    <Box>
      <Paper elevation={5}>
        {data &&
          data.content.scriptures.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
      </Paper>
    </Box>
  );
}
