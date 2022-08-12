import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function CardWrapper({ data }) {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper elevation={5}>
            {data &&
              data.content.scriptures.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
