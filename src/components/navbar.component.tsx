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

const TextButton = ({ children, ...typeProps }) => (
  <Button>
    <Typography
      variant="body1"
      {...typeProps}
      style={{ textTransform: 'none' }}
    >
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
    toolbar: {
      [breakpoints.up('sm')]: {
        padding: `${spacing(1)}px ${spacing(10)}px`,
      },
    },
    search: {
      position: 'relative',
      borderRadius: shape.borderRadius,
      backgroundColor: fade(palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(palette.common.white, 0.25),
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
  const [value, setValue] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const typeProps = { color: 'white' };
  return (
    <Toolbar className={classes.toolbar}>
      <TextButton typeProps={typeProps}>
        <b>Trending:</b>
      </TextButton>
      {['#Coming Soon', '#FreeWatch', '#WatchNow'].map((s) => (
        <TextButton typeProps={typeProps} key={s}>
          {s}
        </TextButton>
      ))}
      <Divider orientation="vertical" flexItem style={{ margin: '0 8px' }} />
      <Tabs
        className={classes.tabs}
        value={value}
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example">
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
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Logo
          </Typography>

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
