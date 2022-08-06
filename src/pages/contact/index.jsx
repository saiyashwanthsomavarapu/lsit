import {
  Box,
  Button,
  Grid,
  // Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { LeftGrid } from "./styles";
import GetInTouch from '../../assets/get-in-touch-animate.svg';

const Contact = () => {
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
          Contact Us
        </Typography>
      </Box>
      <Grid container>
        <LeftGrid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: 'bold'}}>Feel free to Contact Now</Typography>
          <Box component="form" noValidate onSubmit={()=>{}} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="subject"
                  label="Subject"
                  type="text"
                  id="subject"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  minRows={4}
                  name="message"
                  label="Message"
                  type="text"
                  id="message"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              disableElevation={true}
              variant="cotained"
              sx={{ 
                mt: 4,
                borderRadius: 10,
                color: '#fff',
                paddingLeft: 4,
                paddingRight: 4,
                background: '#f4b41a',
                alignSelf: 'flex-start',
                "&:hover": {
                    background: '#f4b41a'
                } }}
            >
              Submit
            </Button>
          </Box>
        </LeftGrid>
        <Grid item xs={12} md={6} sx={{display: 'flex', alignItems: 'center'}}>
          <img style={{position: 'relative'}} src={GetInTouch} height="70%" width="100%"/>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
