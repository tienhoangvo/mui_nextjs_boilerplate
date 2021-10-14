// @mui/material
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// src/react/layouts
import MainLayout from "../src/react/layouts/MainLayout";

// src/react/components
import LinkButton from "../src/react/components/LinkButton";

const AboutPage = () => {
  return (
    <Card variant="outlined">
      <CardHeader title="About Page" />

      <CardContent>
        <Typography paragraph>This is the about page 😊</Typography>
      </CardContent>

      <CardActions>
        <LinkButton variant="contained" href="/">
          Back to Home
        </LinkButton>
      </CardActions>
    </Card>
  );
};

AboutPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default AboutPage;
