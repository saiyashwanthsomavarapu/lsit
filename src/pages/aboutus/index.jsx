import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Subheading } from "../home/styles";
// import Values from '../../assets/values.svg'
import Communite from '../../assets/communite.svg'

const AboutUs = () => {
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
          About Us
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            alignItems: "center",
          }}
        >
          <Subheading variant="h4" sx={{ fontSize: 40, paddingRight: 10 }}>
            Our <br />
            <span
              style={{
                color: "#f4b41a",
                textShadow: "1px 1px 20px 0px #c3c3c3",
                zIndex: 3,
              }}
            >
              Values
            </span>
          </Subheading>
          {/* <img style={{position: 'relative'}} src={Values} height="70%" width="100%"/> */}
        </Grid>
        <Grid item xs={12} md={6} sx={{ paddingLeft: 5, paddingRight: 5 }}>
          {/* <Subheading variant="h4" sx={{ fontSize: 40, paddingRight: 10 }}>
            Our<br/>
            <span style={{ color: "#f4b41a" }}>Values</span>
          </Subheading> */}

          <Typography variant="h3" style={{ padding: 10 }}></Typography>
          <div
            style={{
              padding: 20,
              textAlign: "justify",
              height: 200,
              borderRadius: "10px 2px 10px 2px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            }}
          >
            <Typography variant="p" style={{ fontWeight: 200 }}>
              company primary goals is to help your company simplify its
              business processes optimize profits, and anticipate opportunities
              to grow. Our strong core values permit us to be a responsible firm
              that is committed to honesty, integrity, and respect when working
              with clients as well as employees. In all instances, we ensure
              that our practices are completely in line with the most effective
              practices in this International IT service market.
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          paddingTop: 10,
          paddingBottom: 10,
          background: "#fafafa",
        }}
      >
        <Grid item xs={12} md={6} sx={{ paddingLeft: 5, paddingRight: 5 }}>
          {/* <Subheading variant="h4" sx={{ fontSize: 40, paddingRight: 10 }}>
            Our<br/>
            <span style={{ color: "#f4b41a" }}>Values</span>
          </Subheading> */}

          <Typography variant="h3" style={{ padding: 10 }}></Typography>
          <div
            style={{
              padding: 20,
              textAlign: "justify",
              height: 200,
              borderRadius: "10px 2px 10px 2px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            }}
          >
            <Typography variant="p" style={{ fontWeight: 200 }}>
              To provide our clients with an operating model that continuously
              changes and provides the best quality IT services for their
              business to sustain or change without wasting resources and time.
              We are also committed to the highest level of customer respect and
              openness.
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            alignItems: "center",
          }}
        >
          <Subheading variant="h4" sx={{ fontSize: 40, paddingRight: 10 }}>
            Our <br />
            <span
              style={{
                color: "#f4b41a",
                textShadow: "1px 1px 20px 0px #c3c3c3",
                zIndex: 3,
              }}
            >
              Mission
            </span>
          </Subheading>
          {/* <img style={{posi÷tion: 'relative'}} src={Values} height="70%" width="100%"/> */}
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          padding: 8,
        }}
      >
        {/* <Grid
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
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            //   boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
              margin: 2,
              padding: 20,
            }}
          >
            <Subheading variant="h4" sx={{ fontSize: 30, paddingRight: 10 }}>
            Our <br />
              <span
                style={{
                  color: "#f4b41a",
                  textShadow: "1px 1px 20px 0px #c3c3c3",
                  zIndex: 3,
                }}
              >
                Values
              </span>
            </Subheading>
            <div
              style={{
                paddingTop: 20,
                textAlign: "justify",
                height: 250,
              }}
            >
              <Typography variant="p" style={{ fontWeight: 200 }}>
              company's primary goals is to help your company simplify its
              business processes optimize profits, and anticipate opportunities
              to grow. Our strong core values permit us to be a responsible firm
              that is committed to honesty, integrity, and respect when working
              with clients as well as employees. In all instances, we ensure
              that our practices are completely in line with the most effective
              practices in this International IT service market.
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
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            //   boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
              margin: 2,
              padding: 20,
            }}
          >
            <Subheading variant="h4" sx={{ fontSize: 30, paddingRight: 10 }}>
              Our <br />
              <span
                style={{
                  color: "#f4b41a",
                  textShadow: "1px 1px 20px 0px #c3c3c3",
                  zIndex: 3,
                }}
              >
                Mission
              </span>
            </Subheading>
            <div
              style={{
                paddingTop: 20,
                textAlign: "justify",
                height: 250,
              }}
            >
              <Typography variant="p" style={{ fontWeight: 200 }}>
              To provide our clients with an operating model that continuously changes and provides the best quality IT services for their business to sustain or change without wasting resources and time. We are also committed to the highest level of customer respect and openness.

              </Typography>
            </div>
          </div>
        </Grid> */}
        <Grid
          item
          xs={12}
          md={6}
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
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            //   boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
              margin: 2,
              padding: 20,
            }}
          >
            <Subheading variant="h4" sx={{ fontSize: 30, paddingRight: 10 }}>
              For Our <br />
              <span
                style={{
                  color: "#f4b41a",
                  textShadow: "1px 1px 20px 0px #c3c3c3",
                  zIndex: 3,
                }}
              >
                Communities
              </span>
            </Subheading>
            {/* <img src={Communite} style={{position: 'relative'}} height="10%" width="100%"/> */}
            <div
              style={{
                paddingTop: 20,
                textAlign: "justify",
                height: '100px',
              }}
            >
              <Typography variant="p" style={{ fontWeight: 200 }}>
                Our Social Mission is to be a responsible global citizen. It is
                our intention and obligation to be major donors of time,
                support, and resources to the advancement of humanity.
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            flexDirection: "column",
            // margin: 2,
            padding: "10px",
          }}
        >
          <div
            style={{
              borderRadius: "20px 2px 20px 2px",
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            //   boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
              margin: 2,
              padding: 20,
            }}
          >
            <Subheading variant="h4" sx={{ fontSize: 30, paddingRight: 10 }}>
              For Our <br />
              <span
                style={{
                  color: "#f4b41a",
                  textShadow: "1px 1px 20px 0px #c3c3c3",
                  zIndex: 3,
                }}
              >
                Employees
              </span>
            </Subheading>
            <div
              style={{
                paddingTop: 20,
                textAlign: "justify",
                height: '100px',
              }}
            >
              <Typography variant="p" style={{ fontWeight: 200 }}>
                To be the top selection of jobs for our staff members through
                creating a positive workplace culture that encourages and
                rewards excellence and honesty, teamwork work-life balance, and
                fair handling. To offer work that challenges and increases the
                intellect and capabilities of each member of the team.
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          paddingTop: 10,
          paddingBottom: 10,
          background:'#fafafa'
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
            sx={{ fontSize: 30, paddingRight: 10, textAlign: "center" }}
          >
            Why Cho<span style={{ color: "#f4b41a" }}>ose Us</span>
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
            Our offshore and onshore development teams are able to communicate
            and will chat with you about the most effective IT solutions and how
            to implement the same. We go the extra mile to meet your
            requirements and keep our word. We havve had the trust of our
            customers for over a couple of years.
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 5 }}></Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
