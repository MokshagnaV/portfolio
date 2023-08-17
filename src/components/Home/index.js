import "./style.css";
import { Stack, Typography } from "@mui/material";

const Home = () => {
  return (
    <div className="section" id="Home">
      <Stack paddingY={25} paddingX={2}>
        <Typography fontSize="40px">Hello!!, I'm</Typography>
        <Typography fontSize="80px" lineHeight={0.85}>
          Mokshagna Vemula
        </Typography>
        <Typography variant="body1" fontSize="20px">
          Under Graduate, Frontend Developer
        </Typography>
      </Stack>
    </div>
  );
};

export default Home;
