import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Settings, ExpandLess, ExpandMore, Logout } from '@mui/icons-material';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { darkBlue, darkerBlue, white } from '../util/colors';
import { deepOrange } from '@mui/material/colors';

const drawerWidth = 240;

const classes = [  
  {
    id: 1,
    title: 'Primary 1',
    path: '/primary1'
  },
  {
    id: 2,
    title: 'Primary 2',
    path: '/primary2'
  },
  {
    id: 3,
    title: 'Primary 3',
    path: '/primary3'
  },
  {
    id: 4,
    title: 'Primary 4',
    path: '/primary4'
  },
  {
    id: 5,
    title: 'Primary 5',
    path: '/primary5'
  }
]

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate()

  const drawer = (
    <div>
      <div className='w-full flex flex-row items-center justify-left py-4 px-3'>
        <Avatar sx={{ marginRight: 2, bgcolor: deepOrange[500] }}>A</Avatar>
        <Typography variant="h6" color="black">Admin</Typography>
      </div>
      <Divider />
      <List>
        <Link to='/dashboard' style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon sx={{ color: darkerBlue }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <SchoolIcon sx={{ color: darkerBlue }} />
          </ListItemIcon>
          <ListItemText primary="Classes" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {classes.map((item) => (
              <Link to={item.path} key={item.id} style={{ textDecoration: 'none', color: 'black' }}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        <Link to='/settings' style={{ textDecoration: 'none', color: 'black' }}>
          <ListItemButton>
            <ListItemIcon>
              <Settings sx={{ color: darkerBlue }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to='/logout' style={{ textDecoration: 'none', color: 'black' }}>
          <ListItemButton>
            <ListItemIcon>
              <Logout sx={{ color: darkerBlue }} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </Link>
      </List>
    </div>
  );

  return (
      <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: darkerBlue,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className='tracking-widest text-3xl' variant="h6" noWrap component="div">
            School Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, backgroundColor: darkBlue}}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            backgroundColor: white,
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: white },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
