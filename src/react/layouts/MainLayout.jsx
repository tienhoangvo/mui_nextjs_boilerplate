import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>MUI & Next.js</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" component="main">
        <Toolbar />
        {children}
      </Container>
    </>
  );
};

export default MainLayout;
