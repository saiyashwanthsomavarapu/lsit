import { Grid, Typography } from "@mui/material";
import React from "react";
import { LeftGrid, Subheading } from "../../home/styles";
import Marketing from "../../../assets/marketing.svg";
import DigitalMarket from "../../../assets/ditialMarket.svg";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import Stack from "../../../assets/stack.svg";
import HtmlIcon from "@mui/icons-material/Html";
import JavascriptIcon from "@mui/icons-material/Javascript";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import StorageIcon from "@mui/icons-material/Storage";
import InsightsIcon from "@mui/icons-material/Insights";
const Technology = () => {
  return (
    <>
      <Grid container>
        <LeftGrid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: { xs: 40, lg: 40 },
              textAlign: "left",
              width: "100%",
            }}
          >
            Cutting-edge Technologies <br />
            <span style={{ color: "#f4b41a" }}>
              {" "}
              Powering the Digital Revolution
            </span>
          </Typography>
          <p style={{ fontWeight: 200, fontSize: 20 }}>
            Good ideas makes the company look smart. Great service makes the
            customer feel smart.
          </p>
        </LeftGrid>
        <Grid item xs={12} md={6}>
          <img src={Stack} />
          {/* <Experts />         */}
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
            Our, <span style={{ color: "#f4b41a" }}>Technologies</span>
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
                <HtmlIcon fontSize="large" sx={{ fontSize: 150 }} />
              </span>
              <Subheading
                variant="h4"
                sx={{ fontSize: 30, textAlign: "center" }}
              >
                Web Techonolgies
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
                  Web technologies empower website content to be engaging,
                  interactive, and accessible to a global audience.
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
                <JavascriptIcon fontSize="large" sx={{ fontSize: 150 }} />
              </span>
              <Subheading
                variant="h4"
                sx={{ fontSize: 30, textAlign: "center" }}
              >
                Javascript Frameworks
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
                  JavaScript frameworks enhance website content by providing
                  efficient tools and libraries that simplify development,
                  enable dynamic interactions, and deliver seamless user
                  experiences.
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
                <AndroidIcon fontSize="large" sx={{ fontSize: 150 }} />
                {/* <GroupsIcon sx={{ fontSize: 50 }} /> */}
              </span>
              <Subheading
                variant="h4"
                sx={{ fontSize: 30, textAlign: "center" }}
              >
                Andriod Applications
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
                  Android applications extend website content to mobile devices,
                  enhancing user experience, and enabling convenient access to
                  information and services on the go.
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
                <AppleIcon fontSize="large" sx={{ fontSize: 150 }} />
              </span>
              <Subheading
                variant="h4"
                sx={{ fontSize: 30, textAlign: "center" }}
              >
                IOS Applications
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
                  iOS applications bring website content to Apple devices,
                  offering a seamless and optimized user experience for
                  accessing information and services on iPhones and iPads.
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
                <ArchitectureIcon fontSize="large" sx={{ fontSize: 150 }} />
              </span>
              <Subheading
                variant="h4"
                sx={{ fontSize: 30, textAlign: "center" }}
              >
                UI/UX & Graphic Desgins
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
                  UI/UX and graphic design for website content create visually
                  captivating and user-friendly interfaces that enhance the
                  overall user experience and effectively communicate
                  information.
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
                <StorageIcon fontSize="large" sx={{ fontSize: 150 }} />
              </span>
              <Subheading
                variant="h4"
                sx={{ fontSize: 30, textAlign: "center" }}
              >
                Database & API
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
                  Database and API design for website content enable efficient
                  data management and seamless integration with external
                  services, ensuring smooth data retrieval, storage, and
                  interaction for enhanced website functionality
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Technology;
