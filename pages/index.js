// @mui/material
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// src/react/layouts
import MainLayout from "../src/react/layouts/MainLayout";

const HomePage = () => {
  return (
    <Box>
      <Typography variant="h1">Home Page</Typography>
    </Box>
  );
};

HomePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default HomePage;
