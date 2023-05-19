// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/bg-quienes-somos.jpg";

function IntroBox() {
  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      minHeight="75vh"
      width="100%"
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.secondary.main, 0.9),
            rgba(gradients.dark.state, 0.9)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={16} justifyContent="center" mx="auto">
          <MKTypography
            variant="h1"
            color="white"
            mt={-6}
            mb={1}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            Quiénes Somos{" "}
          </MKTypography>
          <MKTypography
            variant="body1"
            color="white"
            textAlign="center"
            px={{ xs: 10, lg: 12 }}
            mt={1}
          >
            Somos una empresa de profesionales especialistas en soluciones de negocios para gestión
            de adquisiciones, finanzas, capital humano, learning, e-learning, gestión del cambio.
            Implementaciones y mejoras de ERP SAP y Oracle. Elaboramos RFP para selección de
            proveedores de implementación y también hacemos QA para el acompañamiento en procesos de
            implementación. Nuestro equipo está conformado por profesionales multidisciplinarios
            formados y certificados en sistemas vanguardistas, de clase mundial, para el desarrollo
            de nuestras soluciones en gestión.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default IntroBox;
