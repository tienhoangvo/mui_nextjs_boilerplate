import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>MUI & Next.js</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" component="main" sx={{ pt: 2 }}>
        <Toolbar />
        {children}
      </Container>
    </>
  );
};

export default MainLayout;
