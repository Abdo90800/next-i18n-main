"use client";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useTheme } from "@mui/material/styles";
import DirectionsIcon from "@mui/icons-material/Directions";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: "hidden",
    },
  }),
  ...(!open && {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
    "& .MuiDrawer-paper": {
      width: `calc(${theme.spacing(7)} + 1px)`,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
    },
  }),
}));

const SideBar = ({ open, handleDrawerClose, items }) => {
  const theme = useTheme();

  return (
    <StyledDrawer
      variant="permanent"
      open={open}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#344170",
          color: "#fff",
        },
      }}
    >
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronLeftIcon />}
      </IconButton>

      <Divider />
      <List>
        {items.map((e) => (
          <ListItem key={e.link} disablePadding sx={{ display: "block" }}>
            <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
              <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
                {e.icon}
              </ListItemIcon>
              <ListItemText
                primary={e.text}
                sx={{ opacity: open ? 1 : 0, px: 2.5, py: 1.5 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default SideBar;
