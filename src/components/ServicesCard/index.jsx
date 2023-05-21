import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
const ServiceCard = (props) => {
  const { content } = props;
  return (
    <Grid item key={content.title} xs={12} md={4}>
      <Card
        sx={{
          height: 250,
          boxShadow: "none",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <Link
          to={content?.redirect}
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <CardHeader
            title={content.title}
            subheader={content.subheader}
            titleTypographyProps={{ align: "center" }}
            subheaderTypographyProps={{
              align: "center",
            }}
            sx={{
              backgroundColor: "#f4b41a",
              color: "#fff",
            }}
          />
        </Link>
        <CardContent>
          <Typography
            component="p"
            variant="subtitle1"
            align="center"
            sx={{ fontWeight: 200 }}
          >
            {content.description}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button fullWidth variant={tier.buttonVariant} sx={{
                    background: '#f4b41a'
                  }}>
                    {tier.buttonText}
                  </Button> */}
        </CardActions>
      </Card>
    </Grid>
  );
};

ServiceCard.propTypes = {
  content: PropTypes.object,
};
export default ServiceCard;
