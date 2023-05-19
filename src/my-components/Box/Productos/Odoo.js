// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import Card from "@mui/material/Card";
//import CardMedia from "@mui/material/CardMedia";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
//import bgImage from "assets/images/bg-productos.jpg";
import logo from "assets/images/bg-desktop.jpg";
import { Box } from "@mui/material";

function Odoo() {
  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      minHeight="50vh"
      width="100%"
      bgColor="dark"
      opacity={0.9}
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <MKTypography
              variant="h1"
              color="white"
              mt={1}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Productos{" "}
            </MKTypography>
          </Grid>
          <Grid item xs={4}>
            <MKTypography
              variant="h1"
              color="white"
              mt={1}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Productos{" "}
            </MKTypography>
          </Grid>
          <Grid item xs={4}>
            <Box
              component="img"
              display="flex"
              alignItems="center"
              borderRadius="10px"
              maxWidth={"100%"}
              my={2}
              bgColor="dark"
              opacity={0.9}
              sx={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "grid",
                placeItems: "center",
              }}
              src={logo}
              alt="logo"
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Odoo;
