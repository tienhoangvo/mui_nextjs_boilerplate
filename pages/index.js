// @mui/material
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// src/react/layouts
import MainLayout from "../src/react/layouts/MainLayout";

// src/react/components
import LinkButton from "../src/react/components/LinkButton";

const HomePage = () => {
  return (
    <Card>
      <CardHeader title="Home Page" />
      <CardContent>
        <Typography paragraph>This is Home page 🏠</Typography>
      </CardContent>
      <CardActions>
        <LinkButton variant="contained" href="/about">
          Go to About
        </LinkButton>
      </CardActions>
    </Card>
  );
};

HomePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default HomePage;
