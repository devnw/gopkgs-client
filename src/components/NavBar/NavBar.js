import React, { Component } from 'react';
import './NavBar.scss';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';



export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.pages = props.pages;
  }

  render() {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/logos/logo.svg"}
                className="logo"
                alt="Developer Network Logo Symbol" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {this.pages.map((page) => (
                <Button
                  key={page}
                  // onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
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
