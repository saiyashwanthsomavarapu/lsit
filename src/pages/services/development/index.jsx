import { Box, Typography } from '@mui/material';
import React from 'react';

const Development = () => {
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
          Development
        </Typography>
      </Box>
      </>
  )
}

export default Development;    