import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Subheading } from "../../home/styles";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PublicIcon from '@mui/icons-material/Public';

const Staff = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 200,
          // border: '1px solid black',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f4b41a",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Staff
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          paddingTop: 10,
          paddingBottom: 10,
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
          <Subheading
            variant="h4"
            sx={{ fontSize: 30,textAlign: "center" }}
          >
            Start the Process{" "}
            <span style={{ color: "#f4b41a" }}>in a Few Minutes</span>
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
            We have an in-depth analysis of our retention and placement records
            over the last XXXX years, as well as our database contains 10,000+
            applicants, which helps us identify the likelihood of success for
            our candidates.
          </Typography>
        </Grid>
        <Grid container item xs={12} sx={{ marginTop: 5, padding:  '10px 100px' }}>
        {/* <Container maxWidth="md" component="main"> */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <div
              style={{
                borderRadius: "20px 2px 20px 2px",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                //   boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
                margin: 2,
                padding: 20,
              }}
            >
              <span
                style={{
                  color: "#f4b41a",
                  textShadow: "1px 1px 20px 0px #c3c3c3",
                  zIndex: 3,
                }}
              >
                <GroupsIcon sx={{ fontSize: 50 }} />
              </span>
              <Subheading variant="h4" sx={{ fontSize: 20}}>
                Permanent Staffing
              </Subheading>
              <div
                style={{
                  paddingTop: 20,
                  textAlign: "justify",
                  maxHeight: 250,
                  minHeight: 150
                }}
              >
                <Typography variant="p" style={{ fontWeight: 200 }}>
                  xxxxxx gives clients access to future employees who will add
                  value and provide resources.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <div
              style={{
                borderRadius: "20px 2px 20px 2px",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                //   boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
                margin: 2,
                padding: 20,
              }}
            >
              <span
                style={{
                  color: "#f4b41a",
                  textShadow: "1px 1px 20px 0px #c3c3c3",
                  zIndex: 3,
                }}
              >
                <AccessTimeIcon sx={{ fontSize: 50 }} />
              </span>
              <Subheading variant="h4" sx={{ fontSize: 20}}>
                Contractual Basis
              </Subheading>
              <div
                style={{
                  paddingTop: 20,
                  textAlign: "justify",
                  maxHeight: 250,
                  minHeight: 150
                }}
              >
                <Typography variant="p" style={{ fontWeight: 200 }}>
                Our IT staffing contract services allow you to fill long-term or short-term needs. To meet seasonal demands as well as backup positions or urgent project requirements

                </Typography>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <div
              style={{
                borderRadius: "20px 2px 20px 2px",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                //   boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
                margin: 2,
                padding: 20,
              }}
            >
              <span
                style={{
                  color: "#f4b41a",
                  textShadow: "1px 1px 20px 0px #c3c3c3",
                  zIndex: 3,
                }}
              >
                <AccessTimeIcon sx={{ fontSize: 50 }} />
              </span>
              <Subheading variant="h4" sx={{ fontSize: 20}}>
                Contract to Hire
              </Subheading>
              <div
                style={{
                  paddingTop: 20,
                  textAlign: "justify",
                  maxHeight: 250,
                  minHeight: 150
                }}
              >
                <Typography variant="p" style={{ fontWeight: 200 }}>
                XXXXXX lets our clients assess the candidate before they become employees of their company.

                </Typography>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <div
              style={{
                borderRadius: "20px 2px 20px 2px",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                //   boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
                margin: 2,
                padding: 20,
              }}
            >
              <span
                style={{
                  color: "#f4b41a",
                  textShadow: "1px 1px 20px 0px #c3c3c3",
                  zIndex: 3,
                }}
              >
                <PublicIcon sx={{ fontSize: 50 }} />
              </span>
              <Subheading variant="h4" sx={{ fontSize: 20,}}>
                Outsourcing Recruitment
              </Subheading>
              <div
                style={{
                  paddingTop: 20,
                  textAlign: "justify",
                  maxHeight: 250,
                  minHeight: 150
                }}
              >
                <Typography variant="p" style={{ fontWeight: 200 }}>
                Find candidates who could will help your company goals using the help of our RPO Service.

                </Typography>
              </div>
            </div>
          </Grid>
        {/* </Container> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Staff;

