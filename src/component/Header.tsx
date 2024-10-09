"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
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
import { BsArrowLeftRight } from "react-icons/bs";
import { useTranslations } from "next-intl";
import Stack from '@mui/material/Stack';
export default function Header() {
  const t = useTranslations('HomePage'); // استخدام الترجمة الخاصة بـ HomePage
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const arr = [
    { text: t('home'), icon: <RiDashboard2Line color="#fff" />, link: "/home" },
    { text: t('catalog'), icon: <GrCatalogOption color="#fff" />, link: "/home" },
    { text: t('sales'), icon: <MdMonetizationOn color="#fff" />, link: "/home" },
    { text: t('clients'), icon: <IoPersonOutline color="#fff" />, link: "/home" },
    { text: t('shopping'), icon: <MdShoppingBag color="#fff" />, link: "/home" },
    {
      text: t('contentManagement'),
      icon: <LuPencilLine color="#fff" />,
      link: "/home",
    },
  ];

  const arr2 = [
    { text: t('discount'), icon: <RiDiscountPercentLine color="#fff" />, link: "/home" },
    { text: t('stores'), icon: <LiaStoreSolid color="#fff" />, link: "/home" },
    { text: t('prices'), icon: <MdOutlinePriceChange color="#fff" />, link: "/home" },
    { text: t('principles'), icon: <FaRegFolderOpen color="#fff" />, link: "/home" },
    { text: t('ratingAndComments'), icon: <FaSignalMessenger color="#fff" />, link: "/home" },
    { text: t('basicPaymentMethods'), icon: <TbCashRegister color="#fff" />, link: "/home" },
    { text: t('returns'), icon: <BsArrowLeftRight color="#fff" />, link: "/home" },
  ];

  return (
    <Stack sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideBar
        open={open}
        handleDrawerClose={handleDrawerClose}
        items={[...arr, ...arr2]}
      />
    </Stack>
  );
}
