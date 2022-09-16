import { Box, Button, Grid, TextField } from "@mui/material";

function Nick() {
  return (
    <Box component="form" autoComplete="off">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <TextField required label="Nickname" size="small" fullWidth />
        </Grid>

        <Grid item sm={12} md={6}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Nick;
