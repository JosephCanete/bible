import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Passage() {
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={5}> Passage Here </Paper>
    </Box>
  );
}
