"use client";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { RiDashboard2Line } from "react-icons/ri";
import { GrCatalogOption } from "react-icons/gr";
import { MdMonetizationOn } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { MdShoppingBag } from "react-icons/md";
import { LuPencilLine } from "react-icons/lu";
import { RiDiscountPercentLine } from "react-icons/ri";
import { LiaStoreSolid } from "react-icons/lia";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa6";
import { FaSignalMessenger } from "react-icons/fa6";
import { TbCashRegister } from "react-icons/tb";
import Stack from "@mui/material/Stack";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsArrowLeftRight } from "react-icons/bs";
import { BsCommand } from "react-icons/bs";
import { IoMoonOutline } from "react-icons/io5";
import LocalSwitcher from "./LocalSwitcher";

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
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
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const menuItems = [
  { text: "Home", icon: <RiDashboard2Line color="#fff" />, link: "/home" },
  { text: "Catalog", icon: <GrCatalogOption color="#fff" />, link: "/catalog" },
  { text: "Sales", icon: <MdMonetizationOn color="#fff" />, link: "/sales" },
  { text: "Clients", icon: <IoPersonOutline color="#fff" />, link: "/clients" },
  { text: "Shopping", icon: <MdShoppingBag color="#fff" />, link: "/shopping" },
  {
    text: "Content Management",
    icon: <LuPencilLine color="#fff" />,
    link: "/content-management",
  },
];

const additionalMenuItems = [
  {
    text: "Discount",
    icon: <RiDiscountPercentLine color="#fff" />,
    link: "/discount",
  },
  { text: "Stores", icon: <LiaStoreSolid color="#fff" />, link: "/stores" },
  {
    text: "Prices",
    icon: <MdOutlinePriceChange color="#fff" />,
    link: "/prices",
  },
  {
    text: "Principles",
    icon: <FaRegFolderOpen color="#fff" />,
    link: "/principles",
  },
  {
    text: "Rating and Comments",
    icon: <FaSignalMessenger color="#fff" />,
    link: "/rating-comments",
  },
  {
    text: "Basic Payment Methods",
    icon: <TbCashRegister color="#fff" />,
    link: "/payment-methods",
  },
  {
    text: "Returns",
    icon: <BsArrowLeftRight color="#fff" />,
    link: "/returns",
  },
];

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const direction = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: "#fff" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction={"row"}>
            <LocalSwitcher />
            <IconButton aria-label="notifications">
              <IoMdNotificationsOutline color="#000" />
            </IconButton>
            <IconButton aria-label="commands">
              <BsCommand color="#000" />
            </IconButton>
            <IconButton aria-label="dark mode">
              <IoMoonOutline color="#000" />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={direction}
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#344170",
            color: "#fff",
          },
        }}
      >
        <DrawerHeader dir={direction}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.link} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                  ...(open
                    ? { justifyContent: "initial" }
                    : { justifyContent: "center" }),
                }}
                onClick={() => router.push(item.link)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    ...(open ? { mr: 3 } : { mr: "auto" }),
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {additionalMenuItems.map((item) => (
            <ListItem key={item.link} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                  ...(open
                    ? { justifyContent: "initial" }
                    : { justifyContent: "center" }),
                }}
                onClick={() => router.push(item.link)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    ...(open ? { mr: 3 } : { mr: "auto" }),
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
