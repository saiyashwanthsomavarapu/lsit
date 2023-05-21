import { Box, Grid, List, ListItemText, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { FooterTitle } from "./styles";

const Footer = () => {
  return (
    <Box
      sx={{
        background: '#143d59',
        color: '#fff',
        border: "1px solid black",
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        bottom: 0,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
            incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud.
          </Typography>
          <Box
            sx={{
              mt: 4,
              //   color: Colors.dove_gray,
            }}
          >
            {/* <FacebookIcon sx={{ mr: 1 }} /> */}
            {/* <TwitterIcon sx={{ mr: 1 }} /> */}
            {/* <InstagramIcon /> */}
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link to="/about" style={{textDecoration: 'none', color: '#fff'}}>  About Us</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
              <Link to="/contact" style={{textDecoration: 'none', color: '#fff'}}> Contact</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
              <Link to="/" style={{textDecoration: 'none', color: '#fff'}}> Privacy &amp; Policy</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
              <Link to="/" style={{textDecoration: 'none', color: '#fff'}}> Terms &amp; Conditions</Link>
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
