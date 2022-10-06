import * as React from "react";
import PropTypes from "prop-types";
import { Appbar, Linker } from "./styles";
import {
  Toolbar,
  Box,
  Divider,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItem,
  Typography,
  ListItemText,
  Button,
  MenuItem,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const DrawerAppBar = (props) => {
  const { navMenu } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleClick = (event,dropdown) => {
    if (dropdown) {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        LS
      </Typography>
      <Divider />
      <List>
        {navMenu?.map((item) => (
          <ListItem key={item?.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: "#000" }}>
              <Linker to={item?.path}>
                <ListItemText primary={item?.label} />
              </Linker>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar component="nav" position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            {navMenu && <MenuIcon />}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "block" }}
          >
            LS
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navMenu?.map((item, i) => (
              <React.Fragment key={i}>
                <Button
                  id={`demo-customized-button-${i}`}
                  onClick={(e)=>handleClick(e, item?.dropdown)}
                  disableFocusRipple={true}
                  disableRipple={false}
                  disableElevation={true}
                  aria-controls={item?.dropdown && `demo-customized-${i}`}
                  key={item?.label}
                  sx={{ color: "#000",
                  '&:hover':{
                    backgroundColor: "white"
                  }
                }}
                >
                  {item?.path != '' ? <Linker to={item?.path} style={{ textDecoration: "none" }}>
                    {item?.label}
                  </Linker> : item?.label}
                </Button>
                
                {item?.dropdown ? (
                  <Menu
                    elevation={0}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    id={`demo-customized-${i}`}
                    MenuListProps={{
                      "aria-labelledby": `demo-customized-button-${i}`,
                    }}
                    open={open}
                  >
                    {item?.dropdownMenu.map((menu,id)=>(
                      <MenuItem key={id}>
                        <Linker to={menu?.path}>{menu.label}</Linker>
                      </MenuItem>                    
                    ))}
                  </Menu>
                ): ''}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </Appbar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

DrawerAppBar.propTypes = {
  navMenu: PropTypes.array,
};

export default DrawerAppBar;
