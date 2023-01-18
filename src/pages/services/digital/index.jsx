import { Grid, Typography } from "@mui/material";
import React from "react";
import { LeftGrid, Subheading } from "../../home/styles";
import Marketing from "../../../assets/marketing.svg";
import DigitalMarket from "../../../assets/ditialMarket.svg";
import Stack from "../../../assets/stack.svg";
import ExploreIcon from "@mui/icons-material/Explore";
import WebhookIcon from "@mui/icons-material/Webhook";
import InsightsIcon from "@mui/icons-material/Insights";
const Digital = () => {
  return (
    <>
      <Grid container>
        <LeftGrid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: { xs: 40, lg: 60 },
              textAlign: "left",
              width: "100%",
            }}
          >
            Bring clarity to <br />
            <span style={{ color: "#f4b41a" }}>your Digtal World</span>
          </Typography>
          <p style={{ fontWeight: 200, fontSize: 20 }}>
            Good ideas makes the company look smart. Great service makes the
            customer feel smart.
          </p>
        </LeftGrid>
        <Grid item xs={12} md={6}>
          <img src={Marketing} />
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
            Your Goals, <span style={{ color: "#f4b41a" }}>Our Service</span>
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
            We turn ideas into extraordinary digital services & experiences
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={12}
          sx={{
            paddingLeft: 5,
            paddingRight: 5,
            display: "flex",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
              flexDirection: "column",
              padding: "10px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px 2px 20px 2px",
                // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                margin: 2,
                padding: 20,
              }}
            >
              <span
                style={{
                  color: "#f4b41a",
                  textShadow: "1px 1px 20px 0px #c3c3c3",
                  zIndex: 3,
                  textAlign: "center",
                  fontSize: "100",
                }}
              >
                <ExploreIcon fontSize="large" sx={{ fontSize: 150 }} />
                {/* <GroupsIcon sx={{ fontSize: 50 }} /> */}
              </span>
              <Subheading
                variant="h4"
                sx={{ fontSize: 30, textAlign: "center" }}
              >
                Explore
              </Subheading>
              <div
                style={{
                  paddingTop: 20,
                  maxHeight: 100,
                  minHeight: 100,
                  width: 300,
                  textAlign: "center",
                }}
              >
                <Typography variant="p" style={{ fontWeight: 200 }}>
                  We take the time to understand the context so decisions can be
                  made from a place of evidence rather than assumption.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
              flexDirection: "column",
              padding: "10px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px 2px 20px 2px",
                // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                margin: 2,
                padding: 20,
              }}
            >
              <span
                style={{
                  color: "#f4b41a",
                  textShadow: "1px 1px 20px 0px #c3c3c3",
                  zIndex: 3,
                  textAlign: "center",
                  fontSize: "100",
                }}
              >
                <WebhookIcon fontSize="large" sx={{ fontSize: 150 }} />
                {/* <GroupsIcon sx={{ fontSize: 50 }} /> */}
              </span>
              <Subheading
                variant="h4"
                sx={{ fontSize: 30, textAlign: "center" }}
              >
                Analyse
              </Subheading>
              <div
                style={{
                  paddingTop: 20,
                  maxHeight: 100,
                  minHeight: 100,
                  width: 300,
                  textAlign: "center",
                }}
              >
                <Typography variant="p" style={{ fontWeight: 200 }}>
                  We assemble a team of specialized professionals to address the
                  specific needs of your project as they arise.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
              flexDirection: "column",
              padding: "10px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px 2px 20px 2px",
                // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                margin: 2,
                padding: 20,
              }}
            >
              <span
                style={{
                  color: "#f4b41a",
                  textShadow: "1px 1px 20px 0px #c3c3c3",
                  zIndex: 3,
                  textAlign: "center",
                  fontSize: "100",
                }}
              >
                <InsightsIcon fontSize="large" sx={{ fontSize: 150 }} />
                {/* <GroupsIcon sx={{ fontSize: 50 }} /> */}
              </span>
              <Subheading
                variant="h4"
                sx={{ fontSize: 30, textAlign: "center" }}
              >
                Develop
              </Subheading>
              <div
                style={{
                  paddingTop: 20,
                  maxHeight: 100,
                  minHeight: 100,
                  width: 300,
                  textAlign: "center",
                }}
              >
                <Typography variant="p" style={{ fontWeight: 200 }}>
                  Our teams work closely together to ensure your digital assets
                  continue to evolve and deliver a return on your investment.
                </Typography>
              </div>
            </div>
          </Grid>
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
            What we, <span style={{ color: "#f4b41a" }}>do ?</span>
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
          ></Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={12}
          sx={{
            paddingLeft: 5,
            paddingRight: 5,
            display: "flex",
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
              flexDirection: "column",
              padding: "10px",
              alignItems: "center",
            }}
          >
            <img src={DigitalMarket} />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              // justifyContent: "center",
              overflow: "hidden",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 10,
              }}
            >
              <Subheading variant="h4" sx={{ fontSize: 30 }}>
                Digital Marketing
              </Subheading>
              <div
                style={{
                  paddingTop: 20,
                  // maxHeight: 100,
                  minHeight: 100,
                  // width: 300,
                  // textAlign: 'center'
                }}
              >
                <Typography variant="p" style={{ fontWeight: 200 }}>
                  Digital marketing is an essential advantage for an online
                  company to expand its reach on the market. Businesses can
                  harness the power of the internet to increase their website
                  traffic, improve its visibility on their websites on websites,
                  and also engage customers to increase conversions.
                  <br />
                  <br />
                  They require a unique brand identity and an unbeatable digital
                  marketing strategy that can propel their business to success
                  with an effective digital presence.
                  <br />
                  <br />
                  At LSIT, We are an experienced group of digital marketing
                  experts who have experience in developing successful
                  strategies for your business. We can assist you in designing
                  campaigns that produce successful results. Our sophisticated
                  marketing techniques can create deep brand recognition and
                  increase conversions via an increase in website traffic.
                </Typography>
              </div>
            </div>
          </Grid>
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
        <Grid
          item
          container
          xs={12}
          md={12}
          sx={{
            paddingLeft: 5,
            paddingRight: 5,
            display: "flex",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              // justifyContent: "center",
              overflow: "hidden",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 10,
              }}
            >
              <Subheading variant="h4" sx={{ fontSize: 30 }}>
                Technical Services
              </Subheading>
              <div
                style={{
                  paddingTop: 20,
                  // maxHeight: 100,
                  minHeight: 100,
                  marginLeft: 60
                }}
              >
                <Typography variant="p" style={{ fontWeight: 200, fontSize: 20 }}>
                  <ul>
                    <li>UX/UI Design</li>
                    <li>Graphic Design</li>
                    <li>Search Engine Optimization</li>
                    <li>Scaleable Website Development</li>
                    <li>Android & IOS Mobile Development</li>
                    <li>Website Maintenance</li>
                    <li>Support</li>
                  </ul>
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
              padding: "10px",
              alignItems: "center",
            }}
          >
            <img src={Stack} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Digital;
