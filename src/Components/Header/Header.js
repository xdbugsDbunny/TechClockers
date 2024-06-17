import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./logo.png";
import { LogoImage, NavButtons, Techclockers } from "./HeaderStyle";

const drawerWidth = 240;

const navItems = [
  { label: "For start-ups", url: "/forstartups" },
  { label: "Services", url: "/services" },
  { label: "Domain", url: "/domains" },
  { label: "Pricing", url: "/pricing" },
  { label: "About Us", url: "/aboutus" },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TECHCLOCKERS
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} href={item.url}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", zIndex: "20" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="absolute"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <LogoImage src={logo} alt="" />
          <Techclockers
            sx={{ flexGrow: 0.75, display: { sm: "block" } }}
            href={'/'}
          >
            TECHCLOCKERS
          </Techclockers>
          <Box sx={{ display: { xs: "none", sm: "block" }}}>
            {navItems.map((item, index) => (
              <NavButtons key={index} href={item.url}>
                {item.label}
              </NavButtons>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
}

export default Header;
