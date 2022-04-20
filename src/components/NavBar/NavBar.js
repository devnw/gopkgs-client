import React, { Component } from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import "./NavBar.scss";
import LoginButton from "../Auth0/LoginButton";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.pages = props.pages;
    this.settings = ["Profile", "Account", "Dashboard", "Logout"];

    this.user = {
      name: "",
      avatar: "",
    };
  }

  state = {
    anchorElNav: null,
    anchorElUser: null,
  };

  handleOpenNavMenu = (event) => {
    this.setState({ anchorElNav: event.currentTarget });
  };

  handleOpenUserMenu = (event) => {
    this.setState({ anchorElUser: event.currentTarget });
  };

  handleCloseNavMenu = (event) => {
    this.setState({ anchorElNav: null });
  };

  handleCloseUserMenu = () => {
    this.setState({ anchorElUser: null });
  };

  render() {
    return (
      <AppBar position="static" sx={{ bgcolor: "#0E2E3F" }}>
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
                onClick={this.handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(this.state.anchorElNav)}
                onClose={this.handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {this.pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={this.handleCloseNavMenu}
                    component={Link}
                    to={"/" + page.toLowerCase()}
                  >
                    <Typography
                      textAlign="center"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {this.pages.map((page) => (
                <Button
                  component={Link}
                  to={"/" + page.toLowerCase()}
                  key={page}
                  // className="app-links"
                  onClick={this.handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    "&:hover": {
                      background: "#185A7D",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <LoginButton />
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={this.handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={this.user.name} src={this.user.avatar} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={this.state.anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(this.state.anchorElUser)}
                onClose={this.handleCloseUserMenu}
              >
                {this.settings.map((setting) => (
                  <MenuItem key={setting} onClick={this.handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      // <div className='nav-bar'>
      //   <a href='/'>
      //     <img
      //       src={process.env.PUBLIC_URL + "/images/logos/logo.svg"}
      //       className="nav-bar-logo"
      //       alt="Developer Network Logo Symbol" />
      //   </a>

      //   <Menu>
      //     <MenuItem>
      //       <a className='nav-links' href='/'>Main</a>
      //     </MenuItem>
      //     <MenuItem>
      //       <a className='nav-links' href='/about'>About</a>
      //     </MenuItem>
      //     <MenuItem>
      //       <a className='nav-links' href='/domains'>Domains</a>
      //     </MenuItem>
      //     <MenuItem>
      //       <a className='nav-links' href='/modules'>Modules</a>
      //     </MenuItem>
      //   </Menu>
      //   {/* <a className='nav-links' href='/'>Main</a>
      //   <a className='nav-links' href='/about'>About</a>
      //   <a className='nav-links' href='/domains'>Domains</a>
      //   <a className='nav-links' href='/modules'>Modules</a> */}
      //   <Button variant="contained">Login</Button>
      // </div>
    );
  }
}
