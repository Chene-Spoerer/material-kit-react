// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images

function CardDisplay() {
  return (
    <MKBox component="section" py={0} my={6}>
      <Container>
        <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <DefaultInfoCard
                icon="real_estate_agent"
                title="RFP"
                description="Built by developers for developers. Check the foundation and you will find
                    everything inside our documentation."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <DefaultInfoCard
                icon="diamond"
                title="QA"
                description="Built by developers for developers. Check the foundation and you will find
                    everything inside our documentation."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <DefaultInfoCard
                icon="groups"
                title="Capacitación"
                description="The world's most popular react components library for building user interfaces."
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
            <Grid item xs={12} md={4}>
              <DefaultInfoCard
                icon="terminal"
                title="Desarrollos"
                description="Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <DefaultInfoCard
                icon="admin_panel_settings"
                title="Soporte"
                description="Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <DefaultInfoCard
                icon="integration_instructions"
                title="Integraciones"
                description="Regardless of the screen size, the website content will naturally fit the given resolution."
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CardDisplay;
