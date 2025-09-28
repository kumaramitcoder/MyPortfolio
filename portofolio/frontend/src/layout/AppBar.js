import * as React from "react";
import { useTheme } from "@mui/material/styles";
import LeftDrawer from "../components/LeftDrawer";
import MuiAppBar from "@mui/material/AppBar";

import {
  Box,
  CssBaseline,
  Toolbar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Stack,
  styled,
  Switch,
  Typography,
  Avatar,
  Paper,
  Button,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Email";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, selectThemeMode } from "../theme/themeSlice";
import {
  Article,
  Close,
  Delete,
  GitHub,
  Home,
  KeyboardArrowRight,
  MenuOpen,
  Work,
  WorkspacePremium,
} from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import myData from "../data/myData";
import NavHeader from "./NavHeader";
import AnimatedBottomNav from "./AnimatedBottomNav.js";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const drawerWidth = 240;
const leftDrawerWidth = 280;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isClicked, setIsClicked] = React.useState(0);
  const [openRightMini, setOpenRightMini] = React.useState(false);
  const openMenu = Boolean(anchorEl);
  const dispatch = useDispatch();
  const themeMode = useSelector(selectThemeMode);

  const handleLeftDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleLeftDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleLeftDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const toggleDarkMode = () => {
    dispatch(toggleTheme());
  };

  const handleRightMiniDrawerOpen = () => {
    setOpenRightMini(!openRightMini);
  };

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleClick = (arg) => {
    setOpenRightMini(!openRightMini);
    setIsClicked(arg);
  };

  const [ListData, setListData] = React.useState([
    {
      name: "Home",
      icon: <Home />,
      link: "/",
    },
    {
      name: "Portofolio",
      icon: <WorkspacePremium />,
      link: "/portofolio",
    },
    {
      name: "Work",
      icon: <Work />,
      link: "/work",
    },
    {
      name: "Contact",
      icon: <MailIcon />,
      link: "/contact",
    },
    {
      name: "GitHub",
      icon: <GitHub />,
      link: "/github",
    },
    {
      name: "Resume",
      icon: <Article />,
      link: "/resume",
    },
  ]);

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <CssBaseline />

      {/* top app bar */}
      <AppBar
        position="fixed"
        open={open}
        sx={{
          display: { xs: "block", sm: "block" },
          width: { sm: `calc(100% - ${leftDrawerWidth}px)` },
          ml: { sm: `${leftDrawerWidth}px` },
        }}
      ><NavHeader /></AppBar>
      {/* drawer logic */}
      <Box
        component="nav"
        sx={{ width: { sm: leftDrawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleLeftDrawerTransitionEnd}
          onClose={handleLeftDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: leftDrawerWidth,
            },
          }}
        >
          <LeftDrawer />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: leftDrawerWidth,
            },
          }}
          open
        >
          <LeftDrawer />
        </Drawer>
      </Box>

      <Box sx={{ width: "100%" }}>
        <NavHeader sx={{display:{sm:''}}}/>
        
        <MainContent />
      </Box>

      <RightDrawer
        sx={{ display: "none" }}
        theme={theme}
        open={open}
        handleClick={handleClick}
        handleDrawerClose={handleDrawerClose}
        ListData={ListData}
        isClicked={isClicked}
        openMenu={openMenu}
        handleMenu={handleMenu}
        handleClose={handleClose}
        toggleDarkMode={toggleDarkMode}
        anchorEl={anchorEl}
        themeMode={themeMode}
        handleDrawerOpen={handleDrawerOpen}
        openRightMini={openRightMini}
      />
      <Paper
        sx={{
          display: {
            sm: "flex",
            sx: "flex",
            lg: "none",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // bgcolor: "red",
          color: "white",
          height: "60px",
          bottom: 0,
          left: 0,
          right: 0,
          gap: 4,
          position: "absolute",
        }}
      >
        <AnimatedBottomNav ListData={ListData} />
        {/* {ListData.map((item, index) => {
          return (
            <IconButton
              aria-label="delete"
              size="small"
              component={Link}
              to={item.link}
            >
              {item.icon}
            </IconButton>
            
          );
        })} */}
      </Paper>
    </Box>
  );
}

function RightDrawer({
  // theme,
  open,
  handleDrawerClose,
  ListData,
  isClicked,
  handleClick,
  // openMenu,
  // handleMenu,
  // handleClose,
  // anchorEl,
  toggleDarkMode,
  themeMode,
  handleDrawerOpen,
  openRightMini,
}) {
  return (
    <Drawer
      variant="permanent"
      open={open}
      anchor="right"
      sx={{
        display: {
          xs: openRightMini ? "block" : "none",
          sm: "block",
        },
      }}
    >
      <DrawerHeader
        sx={{
          display: "flex",
          direction: "row",
          width: "100%",
          justifyContent: "flex-start",
        }}
      >
        {open ? (
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        ) : (
          <IconButton onClick={handleDrawerOpen} sx={{ mr: "auto" }}>
            <ChevronLeftIcon />
          </IconButton>
        )}
      </DrawerHeader>
      <Divider />
      <List>
        {ListData.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Tooltip title={item.name} placement="left-start">
              <ListItemButton
                onClick={() => handleClick(index)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  mx: 1,
                  color: isClicked === index ? "primary.main" : "default",
                  borderRadius: 2,
                }}
                component={Link}
                to={item.link}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: isClicked === index ? "primary.main" : "default",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 2 : "auto",
              justifyContent: "center",
            }}
          >
            <MaterialUISwitch
              checked={themeMode === "dark"} // Corrected usage of checked prop
              onClick={toggleDarkMode}
            />
          </ListItemIcon>
          <ListItemText
            primary={themeMode === "dark" ? "Light" : "Dark"}
            sx={{ opacity: open ? 1 : 0 }}
          />
        </ListItem>
      </List>
    </Drawer>
  );
}

function MainContent() {
  return (
    <Stack
      minHeight="100vh"
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        // overflowY: "auto",
        // maxHeight: "100vh", // Adjust as needed
        // "&::-webkit-scrollbar": {
        //   width: "8px",
        // },
        // "&::-webkit-scrollbar-track": {
        //   background: "#1f2937", // Dark blue background color
        // },
        // "&::-webkit-scrollbar-thumb": {
        //   backgroundColor: "#3C454A ", // Dark blue thumb color
        //   borderRadius: "4px",
        // },
        // "::-webkit-scrollbar-thumb:hover": {
        //   background: "#555",
        // },
      }}
    >
      {/* <DrawerHeader sx={{ display: { xs: "block", sm: "none" } }} /> */}

      <Outlet />
      <Footer />
    </Stack>
  );
}
