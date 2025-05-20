import * as React from 'react';
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
import AdbIcon from '@mui/icons-material/Adb';
import { Circle } from '@mui/icons-material';
import { Link } from '@mui/material';
import { HashLink } from 'react-router-hash-link';

const pages = {
  About: "/#about",
  Toolkit: "/design-engine#design-engine-landing",
  Applications: "/applications#applications",
  Download: "/download",
};
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
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
    console.log('shii')
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{ backgroundColor: "white", color: "black" }}
      position="fixed"
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Circle sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              // mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NOGAS
          </Typography>
          <Typography
            sx={{
              mr: {xs:0, md: 2},
              display: { xs: "none", md: "flex" },
            }}
          >
            Beta
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "contents", md: "none" } }}>
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
              paperProps={{
                sx: {
                  width: "100vw",
                  maxWidth: "100vw",
                  overflowX: "hidden",
                }
              }}
            >
              {Object.keys(pages).map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  <HashLink
                    to={pages[page]}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {page}
                  </HashLink>
                </Button>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              // flexGrow: 1,
              textAlign:'left',
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NOGAS
          </Typography>
          <Typography
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              // flexGrow: 0,
            }}
          >
            {" "}
            Beta
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {Object.keys(pages).map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                <HashLink
                  to={pages[page]}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {page}
                </HashLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
