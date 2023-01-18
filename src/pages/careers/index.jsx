import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { Box } from "@mui/system";
import React from "react";
import { LeftGrid, Subheading } from "../home/styles";
import Career from "../../assets/careers.svg";

const Careers = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box>
      <Grid container>
        <LeftGrid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: { xs: 40, lg: 60 },
              textAlign: "left",
              width: "100%",
            }}
          >
            Start your <br />
            <span style={{ color: "#f4b41a" }}>Journey with us.</span>
          </Typography>

          <p style={{ fontWeight: 200 }}>
            We offer opportunities for fresh Grads as well as experienced
            professionals. We are a tech company and primarily work on the
            newest technology stack in order to build mobile and web
            applications based on our client's needs.
          </p>
        </LeftGrid>
        <Grid item xs={12} md={6}>
          <img src={Career} />
          {/* <Experts />         */}
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          paddingTop: 10,
          background: "#fafafa",
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            paddingLeft: 5,
            paddingRight: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Subheading variant="h4" sx={{ fontSize: 30, textAlign: "center" }}>
            <span style={{ color: "#f4b41a" }}>Career</span>
          </Subheading>
          <Typography
            variant="p"
            style={{
              fontWeight: 200,
              fontSize: 20,
              textAlign: "center",
              padding: "10px 0px 10px 0px",
              marginLeft: "20%",
              marginRight: "20%",
            }}
          >
            We are a firm believer in using the " Learning while Working "
            method. We continue to organize workshops to help you learn new
            techniques and keep you up-to-date with the latest versions of our
            technology stack.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6">Current Openings</Typography>
          <div>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Full Stack Developer
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                    Location: New York
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Detials
                </Typography>

                  <Button variant='contained' disableElevation={true} sx={{
                    borderRadius: 10,
                    color: '#fff',
                    paddingLeft: 4,
                    paddingRight: 4,
                    background: '#f4b41a',
                    alignSelf: 'flex-start',
                    "&:hover": {
                        background: '#f4b41a'
                    }
                }}>Apply</Button>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Careers;
