import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";

import styled, { css } from "styled-components";
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { HiOutlineBars3 } from "react-icons/hi2";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import { IoMdDownload } from "react-icons/io";
/*스타일*/

const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 480,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 5rem;
  margin-top: 0.5rem;
  width: 100%;
  border-bottom: solid 2px #b5b5b5;

  ${media.desktop`
  min-height: 5rem;
  margin-top: 0.5rem;`}
  ${media.tablet`
  min-height: 4rem;
  margin-top: 0.5rem;
  `} 
  ${media.phone`
  min-height: 3rem;
  margin-top: 0.5rem;
  `};
`;

const NavLogoContainer = styled.div`
  width: 21rem;
  ${media.desktop`
  width: 18rem;
  margin-left: 0.5rem;`}

  ${media.tablet`
  width: 14rem;
  `}

  ${media.phone`
  width: 12rem;
  `}
`;
const NavMenuContainer = styled.div`
  display: none;

  ${media.tablet`
  display: flex;
  max-width: 5rem;
  `}
  ${media.phone`
  display: flex;
  max-width: 5rem;
  `}
`;
const NavLinkContainer = styled.div`
  margin-right: 3rem;
  text-decoration: none;
  color: black;
  font-size: 1.1rem;
  font-weight: 700;

  ${media.tablet`
  display: none;
  `}
`;
const NavLink = styled.a`
  margin-right: 3rem;
  text-decoration: none;
  color: black;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  ${media.desktop`
  margin-right:1rem;
  font-size:1rem;`}
`;
const PrimaryButton = styled.button`
  padding: 0.9rem 1.75rem;
  background-color: #323949;
  color: white;
  outline: none;
  border: none;
  border-radius: 5rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s;

  ${media.desktop`
  font-size: 0.8rem;
  padding: 0.5rem 1.1rem;`}

  &:hover{
    background-color: rgb(234, 234, 234);}
  }
`;
const Icon = styled.div`
  width: 2rem;
  font-size: 1.5rem;
`;
const ListContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
  padding-left: 2rem;
`;
/**/
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    { text: "Home", icon: <HomeIcon /> },
    {
      text: "Youtube",
      icon: <InfoIcon />,
      url: "https://www.youtube.com/watch?v=zM_3zmYrca4",
    },
    {
      text: "Install",
      icon: <IoMdDownload />,
      url: "https://github.com/Thoughtful-Whisper",
    },
  ];
  return (
    <Nav>
      <NavLogoContainer>
        <img src={Logo} alt="" />
      </NavLogoContainer>
      <Divider />
      <NavLinkContainer>
        <NavLink href="">Home</NavLink>
        <NavLink
          onClick={() =>
            (window.location.href =
              "https://www.youtube.com/watch?v=zM_3zmYrca4")
          }>
          About
        </NavLink>
        <PrimaryButton
          onClick={() =>
            (window.location.href = "https://github.com/Thoughtful-Whisper")
          }>
          Install Now
        </PrimaryButton>
      </NavLinkContainer>

      <NavMenuContainer>
        <Icon>
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </Icon>
      </NavMenuContainer>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}>
          <List>
            {menuOptions.map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                onClick={() => (window.location.href = item.url)}>
                <ListContainer>
                  <ListItemIcon sx={{ color: "#323949" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListContainer>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Nav>
  );
};

export default Navbar;
