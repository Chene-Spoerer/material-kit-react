// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
//import MKTypography from "components/MKTypography";

// MY Components
//import BasicBox from "my-components/Box/BasicBox";
//import CardDisplay from "my-components/Cards/CardDisplay";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-edificios.jpg";
import sigemLogo from "assets/images/logo-sigem.png";

function Basic() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.secondary.main, 0.9),
              rgba(gradients.dark.state, 0.4)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "top",
        }}
      >
        <Container>
          <Grid item px={0} pt={10} xs={4} md={0}>
            <MKBox component="img" src={sigemLogo} alt="Sigem" width="30%" opacity={1} />
          </Grid>
        </Container>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Basic;
