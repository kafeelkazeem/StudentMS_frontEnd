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
import { Settings } from '@mui/icons-material';
import { darkBlue, darkerBlue, white } from '../util/colors';

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

  const navigate = useNavigate()

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Dash Board'].map((text, index) => (
          <Link to='/dashboard' style={{textDecoration: 'none', color: 'black'}}><ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon color={darkerBlue} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {classes.map((i, index) => (
          <Link to={i.path} style={{textDecoration: 'none', color: 'black'}}><ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SchoolIcon color={darkerBlue} />
              </ListItemIcon>
              <ListItemText primary={i.title} />
            </ListItemButton>
          </ListItem></Link>
        ))}
      </List>
      <Divider />
      <List>
        <Link to='/settings' style={{textDecoration: 'none', color: 'black'}}>
          <ListItemButton>
            <ListItemIcon>
              <Settings color={darkerBlue} />
            </ListItemIcon>
            <ListItemText primary='Settings' />
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
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth},
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
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
