import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";

import { useAuth0 } from "@auth0/auth0-react";

import "./NavBar.scss";
import LoginButton from "../Auth0/LoginButton";

const NavBar = (props) => {
  const { user, isAuthenticated, logout } = useAuth0();

  // const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElNav, setanchorElNav] = useState(null);
  const [anchorElUser, setanchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setanchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setanchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setanchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setanchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/logos/logo.svg"}
              className="logo"
              alt="Developer Network Logo Symbol"
            />
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
              }}
            >
              {props.pages.map((page) =>
                page.authenticated && !isAuthenticated ? null : (
                  <MenuItem
                    key={page.path}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={page.path}
                  >
                    <Typography
                      textAlign="center"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {page.title}
                    </Typography>
                  </MenuItem>
                )
              )}
              <MenuItem
                onClick={handleCloseNavMenu}
                component={Button}
                href="https://github.com/sponsors/devnw"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Typography
                  textAlign="center"
                  sx={{ textTransform: "capitalize" }}
                >
                  Sponsor
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {props.pages.map((page) =>
              page.authenticated && !isAuthenticated ? null : (
                <Button
                  component={Link}
                  to={page.path}
                  key={page.path}
                  // className="app-links"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    "&:hover": {
                      background: "#185A7D",
                    },
                    textAlign: "center",
                  }}
                >
                  {page.title}
                </Button>
              )
            )}
            <Button
              target="_blank"
              href="https://github.com/sponsors/devnw"
              rel="noreferrer noopener"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                "&:hover": {
                  background: "#185A7D",
                },
                textAlign: "center",
              }}
            >
              Sponsor
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {!isAuthenticated ? (
              <LoginButton />
            ) : (
              <div>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.name} src={user.picture} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                  {/* {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))} */}
                </Menu>
              </div>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
