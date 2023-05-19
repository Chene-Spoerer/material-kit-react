// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// Material Kit 2 React examples
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

function CardProducts() {
    return (    
        <Container>
            <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
                <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                />
            </Grid>
            <Grid item xs={12} lg={4}>
                <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                    type: "external",
                    route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                    label: "Read more",
                }}
                />
            </Grid>
            <Grid item xs={12} lg={4}>
                <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                    type: "external",
                    route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                    label: "Read more",
                }}
                />
            </Grid>
            </Grid>
        </Container>
    );
}

export default CardProducts;                