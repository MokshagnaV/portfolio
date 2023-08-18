import "./style.css";
import { Grid, Stack, Typography } from "@mui/material";

const Home = () => {
  return (
    <div className="section" id="Home">
      <Grid container>
        <Grid item xs={12} md={6}>
          <Stack paddingY={20} paddingX={2} flexGrow={1}>
            <Typography
              fontSize={{ xs: "25px", sm: "3vw" }}
              fontFamily="'Amatic SC', cursive"
            >
              Hello!!, I'm
            </Typography>
            <Typography
              fontSize={{ xs: "40px", sm: "6vw" }}
              fontFamily="'Abril Fatface', cursive;"
              lineHeight={0.85}
            >
              Mokshagna Vemula
            </Typography>
            <Typography
              variant="body1"
              fontSize={{ xs: "20px", sm: "1.5vw" }}
              fontFamily="'Amatic SC', cursive"
              fontWeight="800"
            >
              Under Graduate, Frontend Developer
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img src="./assets/home1.svg" alt="hero" width="80%" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
