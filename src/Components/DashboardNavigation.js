import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useUserAuth } from "./../context/UserAuthContext";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import InsightsIcon from "@mui/icons-material/Insights";
import RadarIcon from "@mui/icons-material/Radar";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Logo from "../assets/logo.svg";
import { useLocation, NavLink } from "react-router-dom";

const drawerWidth = 100;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "rgb(132,124,255)",
  backgroundImage:
    "radial-gradient(circle, rgba(132,124,255,1) 0%, rgba(44,124,218,1) 100%)",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  //   backgroundColor: "var(--dark-primary)",
  backgroundColor: "rgb(132,124,255)",
  backgroundImage:
    "radial-gradient(circle, rgba(132,124,255,1) 0%, rgba(44,124,218,1) 100%)",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
}));

export default function DashboardNavigation({ children }) {
  const location = useLocation();
  const { user, logOut } = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={true}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ textTransform: "capitalize" }}
          >
            {location.pathname.substring(1)}
          </Typography>
          <div className="alignRight">
            <Chip
              sx={{
                borderColor: "white",
                cursor: "pointer",
                marginRight: "10px",
              }}
              label={<NotificationsOutlinedIcon sx={{ color: "white" }} />}
              variant="outlined"
            />
            <Chip
              sx={{ borderColor: "white", cursor: "pointer", color: "white" }}
              icon={<FaceIcon />}
              label={user.email}
              variant="outlined"
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={true}>
        <DrawerHeader>
          <img src={Logo} alt="logo" />
        </DrawerHeader>
        <Divider />
        <List sx={{ padding: "0px", margin: "auto 0px", minHeight: "70%" }}>
          <NavLink to="/dashboard">
            <ListItem
              button
              className={
                location.pathname === "/dashboard"
                  ? "listItem currentItem"
                  : "listItem"
              }
            >
              <ListItemIcon className="listItemIcon">
                <DashboardIcon className="white" />
              </ListItemIcon>
              <ListItemText
                className={
                  location.pathname === "/dashboard"
                    ? "listItemTextActive"
                    : "listItemText"
                }
                primary={"Dashboard"}
              />
            </ListItem>
          </NavLink>
          <NavLink to="/orders">
            <ListItem
              className={
                location.pathname === "/orders"
                  ? "listItem currentItem"
                  : "listItem"
              }
              button
            >
              <ListItemIcon className="listItemIcon">
                <FormatListBulletedIcon className="white" />
              </ListItemIcon>
              <ListItemText
                className={
                  location.pathname === "/orders"
                    ? "listItemTextActive"
                    : "listItemText"
                }
                primary={"Orders"}
              />
            </ListItem>
          </NavLink>
          <ListItem button className="listItem">
            <ListItemIcon className="listItemIcon">
              <RadarIcon className="white" />
            </ListItemIcon>
            <ListItemText className="listItemText" primary={"Live Tracking"} />
          </ListItem>
          <ListItem button className="listItem">
            <ListItemIcon className="listItemIcon">
              <EmailIcon className="white" />
            </ListItemIcon>
            <ListItemText className="listItemText" primary={"Messaging"} />
          </ListItem>
          <ListItem button className="listItem">
            <ListItemIcon className="listItemIcon">
              <InsightsIcon className="white" />
            </ListItemIcon>
            <ListItemText className="listItemText" primary={"Statistics"} />
          </ListItem>
          <ListItem button className="listItem">
            <ListItemIcon className="listItemIcon">
              <SettingsIcon className="white" />
            </ListItemIcon>
            <ListItemText className="listItemText" primary={"Settings"} />
          </ListItem>
        </List>
        <Divider sx={{ borderColor: "white" }} />
        <NavLink onClick={handleLogOut} to="/dashboard">
          <ListItem button className="listItem">
            <ListItemIcon className="listItemIcon">
              <LogoutIcon className="white" />
            </ListItemIcon>
            <ListItemText className="listItemText" primary={"Logout"} />
          </ListItem>
        </NavLink>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
