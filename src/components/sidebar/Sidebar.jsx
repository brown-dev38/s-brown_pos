import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  SideBar,
  Logo,
  LogoImg,
  LogoTitle,
  Burger,
  BurgurTrigger,
  BurgerMenu,
  Profile,
  ProfileImg,
  ProfileContent,
  ProfileTitle,
  ProfileName,
  Content,
  ContentUl,
  ContentUlBottom,
  ContentList,
  ContentMenu,
  ContentName,
} from "../styled-components/sidebar/Sidebar";
import { useTheme } from "../styled-components/theme/MyThemeProvider";
import AdfScannerRoundedIcon from "@mui/icons-material/AdfScannerRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import profileBrown from "../../assets/img/brown.jpg";
import logoBrownDev from "../../assets/img/logobrown-dev.png";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

export default function Sidebar() {
  const theme = useTheme();
  const location = useLocation();
  const [closeBurgerMenu, setCloseBurgerMenu] = useState(false);

  /*--------------------------------------------------------------------------*\
    # Function Close Burger Menu
  \*--------------------------------------------------------------------------*/
  const handleClickCloseBurgerMenu = () => {
    setCloseBurgerMenu((closeBurgerMenu) => !closeBurgerMenu);
  };
  console.log(closeBurgerMenu);

  /*--------------------------------------------------------------------------*\
    # Return
  \*--------------------------------------------------------------------------*/
  return (
    <SideBar $active={closeBurgerMenu}>
      <Logo>
        <LogoImg src={logoBrownDev} alt="logo" />
        <LogoTitle $active={closeBurgerMenu}>POSv0.11</LogoTitle>
      </Logo>

      <Burger>
        <BurgurTrigger
          onClick={() => handleClickCloseBurgerMenu()}
        ></BurgurTrigger>
        <BurgerMenu $active={closeBurgerMenu}></BurgerMenu>
      </Burger>

      <Profile>
        <ProfileImg src={profileBrown} alt="profile" />
        <ProfileContent $active={closeBurgerMenu}>
          <ProfileTitle>
            Hello, Brown
            <WavingHandIcon
              sx={{ color: theme.color.primary, marginInlineStart: "0.5rem" }}
            />
          </ProfileTitle>
          <ProfileName>anantrakul38@gmail.com</ProfileName>
        </ProfileContent>
      </Profile>

      <Content>
        <ContentUl>
          <ContentList $active={location.pathname === "/"}>
            <ContentMenu href="/" $active={location.pathname === "/"}>
              <AdfScannerRoundedIcon sx={{ width: "3rem", height: "2rem" }} />
              <ContentName $active={closeBurgerMenu}>Pos</ContentName>
            </ContentMenu>
          </ContentList>

          <ContentList $active={location.pathname === "/products"}>
            <ContentMenu
              href="/products"
              $active={location.pathname === "/products"}
            >
              <AddShoppingCartRoundedIcon
                sx={{ width: "3rem", height: "2rem" }}
              />
              <ContentName $active={closeBurgerMenu}>Products</ContentName>
            </ContentMenu>
          </ContentList>

          <ContentList $active={location.pathname === "/orders"}>
            <ContentMenu
              href="/orders"
              $active={location.pathname === "/orders"}
            >
              <ListAltRoundedIcon sx={{ width: "3rem", height: "2rem" }} />
              <ContentName $active={closeBurgerMenu}>Orders</ContentName>
            </ContentMenu>
          </ContentList>

          <ContentList $active={location.pathname === "/dashboard"}>
            <ContentMenu
              href="/dashboard"
              $active={location.pathname === "/dashboard"}
            >
              <DashboardCustomizeRoundedIcon
                sx={{ width: "3rem", height: "2rem" }}
              />
              <ContentName $active={closeBurgerMenu}>Dashboard</ContentName>
            </ContentMenu>
          </ContentList>

          <ContentList $active={location.pathname === "/report"}>
            <ContentMenu
              href="/report"
              $active={location.pathname === "/report"}
            >
              <DescriptionRoundedIcon sx={{ width: "3rem", height: "2rem" }} />
              <ContentName $active={closeBurgerMenu}>Report</ContentName>
            </ContentMenu>
          </ContentList>
        </ContentUl>

        <ContentUlBottom>
          <ContentList $active={location.pathname === "/setting"}>
            <ContentMenu
              href="/setting"
              $active={location.pathname === "/setting"}
            >
              <SettingsSuggestRoundedIcon
                sx={{ width: "3rem", height: "2rem" }}
              />
              <ContentName $active={closeBurgerMenu}>Setting</ContentName>
            </ContentMenu>
          </ContentList>

          <ContentList $active={location.pathname === "/logout"}>
            <ContentMenu
              href="/setting"
              $active={location.pathname === "/logout"}
            >
              <ExitToAppRoundedIcon sx={{ width: "3rem", height: "2rem" }} />
              <ContentName $active={closeBurgerMenu}>Logout</ContentName>
            </ContentMenu>
          </ContentList>
        </ContentUlBottom>
      </Content>
    </SideBar>
  );
}
