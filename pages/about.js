// @mui/material
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// src/react/layouts
import MainLayout from "../src/react/layouts/MainLayout";

const AboutPage = () => {
  return (
    <Box>
      <Typography variant="h1">About Page</Typography>
    </Box>
  );
};

AboutPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default AboutPage;
