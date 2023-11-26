import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import styled from "styled-components";
import "./navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  const pages = ["Products", "Pricing", "Blog"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    // !mui
    <AppBar
      position="fixed"
      sx={{
        background: "black",
        padding: "0rem 2rem",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Rohan Sherstha
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                cursor: "pointer",
              }}
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                <li style={{ margin: "3px 1rem" }}>ABOUT</li>{" "}
              </Link>

              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li style={{ margin: "3px 1rem" }}>WORK</li>{" "}
              </Link>

              <a
                href="/pdf/rohanshresthaCV.pdf"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <li style={{ margin: "3px 1rem" }}>CV</li>
              </a>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "17px",
              width: "auto",
            }}
          >
            Rohan Shrestha
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <ul
              style={{ display: "flex", gap: "2rem", cursor: "pointer" }}
              className="navbar-ui"
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                <li>ABOUT</li>{" "}
              </Link>

              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li>WORK</li>{" "}
              </Link>

              <a href="/pdf/rohanshresthaCV.pdf" target="_blank">
                <li>CV</li>
              </a>
            </ul>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const Div = styled.div`
  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  // border: 1px solid red;
  background: black;
`;

export default Navbar;
