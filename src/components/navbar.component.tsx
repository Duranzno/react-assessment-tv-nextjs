import React from 'react';
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu,
  Grid,
  Divider,
  Tabs,
  Tab,
  Button,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Logo } from './buttons.component';

const TextButton = ({ children, className }) => (
  <Button className={className}>
    <Typography variant="body1" style={{ textTransform: 'none' }}>
      {children}
    </Typography>
  </Button>
);
const useStyles = makeStyles((theme: Theme) => {
  // prettier-ignore
  const {
    spacing, breakpoints, shape, transitions, palette,
  } = theme;
  return createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: spacing(2),
    },
    search: {
      position: 'relative',
      borderRadius: shape.borderRadius,
      backgroundColor: fade(palette.primary.dark, 0.15),
      '&:hover': {
        backgroundColor: fade(palette.primary.dark, 0.25),
      },
      margin: spacing(0, 4),
      // width: '100%',
      // [breakpoints.up('sm')]: {
      // width: '60vw',
      // },
      [breakpoints.down('md')]: {
        display: 'none',
      },
    },
    searchIcon: {
      margin: spacing(0, 2),
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${spacing(4)}px)`,
      transition: transitions.create('width'),
      width: '100%',
      [breakpoints.up('md')]: {
        width: '40vw',
      },
    },
    sectionDesktop: {
      display: 'none',
      [breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    filter: {
      [breakpoints.down('md')]: {
        display: 'none',
      },
    },
    hoverColor: {
      '&:hover': {
        color: 'blue', // theme.palette.primary,
        fill: 'blue', // theme.palette.primary,
      },
    },
    tabs: {},
    tab: {},
    sectionMobile: {
      display: 'flex',
      [breakpoints.up('md')]: {
        display: 'none',
      },
    },
  });
});
export const SecondNavbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Toolbar>
      <TextButton className={classes.sectionDesktop}>
        <b>Trending:</b>
      </TextButton>
      {['#Coming Soon', '#FreeWatch', '#WatchNow'].map((s) => (
        <TextButton
          className={classes.sectionDesktop}
          key={s}
        >
          {s}
        </TextButton>
      ))}
      <Divider
        className={classes.sectionDesktop}
        orientation="vertical"
        variant="middle"
        flexItem
        style={{ marginRight: '16px', marginLeft: '64px' }}
      />
      <Tabs
        className={classes.tabs}
        value={value}
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab className={classes.tab} label="Home" />
        <Tab className={classes.tab} label="Blog" disabled />
      </Tabs>
    </Toolbar>
  );
};
export function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);

  const MenuItemContent = () => (
    <Grid className={classes.hoverColor} container direction="column">
      <Grid container item direction="row" justify="space-between">
        <Typography variant="body2">Main Menu Item #1</Typography>
        <ArrowRightIcon />
      </Grid>
      <Typography variant="body1">Short menu description</Typography>
    </Grid>
  );

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={isMenuOpen}
      style={{ borderRadius: '50px' }}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <MenuItemContent />
      </MenuItem>
      <Divider variant="middle" />
      <MenuItem onClick={handleMenuClose}>
        <MenuItemContent />
      </MenuItem>
      <Divider variant="middle" />
      <MenuItem onClick={handleMenuClose}>
        <MenuItemContent />
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="open drawer"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Logo />

          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              endAdornment={<SearchIcon className={classes.searchIcon} />}
            />
          </div>
          <IconButton
            aria-label="facebook"
            color="inherit"
            className={classes.filter}
          >
            <FilterListIcon />
          </IconButton>
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <IconButton aria-label="facebook" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="instagram" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="pinterest" color="inherit">
              <PinterestIcon />
            </IconButton>
          </div>
        </Toolbar>
        <SecondNavbar />
      </AppBar>
      {renderMenu}
    </div>
  );
}
