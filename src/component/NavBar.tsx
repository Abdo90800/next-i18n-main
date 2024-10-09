// AppBarComponent.js
"use client";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCommand } from "react-icons/bs";
import { IoMoonOutline } from "react-icons/io5";
import LocalSwitcher from "./local-switcher";
import { useTranslations } from "next-intl";

const StyledAppBar = styled(AppBar)(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240, // 240 هو عرض Drawer
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const NavBar = ({ open, handleDrawerOpen }) => {
  const t = useTranslations("HomePage"); // ت

  return (
    <StyledAppBar position="fixed" open={open} sx={{ background: "#fff" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Stack direction={"row"}>
          <LocalSwitcher />
          <IconButton sx={{ color: "#000" }}>
            <IoMdNotificationsOutline />
          </IconButton>
          <IconButton sx={{ color: "#000" }}>
            <BsCommand />
          </IconButton>
          <IconButton sx={{ color: "#000" }}>
            <IoMoonOutline />
          </IconButton>
        </Stack>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
