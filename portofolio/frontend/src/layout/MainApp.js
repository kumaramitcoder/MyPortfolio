import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Article,
  GitHub,
  Home,
  Work,
  WorkspacePremium,
} from "@mui/icons-material";
import { Stack, Switch, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, selectThemeMode } from "../theme/themeSlice";
import MainContent from "./MainContent ";
import AnimatedBottomNav from "./AnimatedBottomNav.js";
import NavHeader from "./NavHeader";
import { useViewportHeight } from "../Hooks/useViewportHeight.js";
const drawerWidth = 240;
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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MainApp() {
  const theme = useTheme();
  const viewportHeight = useViewportHeight();
  const [open, setOpen] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(0);
  const dispatch = useDispatch();
  const themeMode = useSelector(selectThemeMode);
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
  const [appBarHeight, setAppBarHeight] = React.useState(0);
  const [bottomNavHeight, setBottomNavHeight] = React.useState(0);
  const bottomMenu = 8;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = (arg) => {
    // setOpenRightMini(!openRightMini);
    setIsClicked(arg);
  };
  const toggleDarkMode = () => {
    dispatch(toggleTheme());
  };
  // Ref to attach to the AppBar DOM element
  const appBarRef = React.useRef(null);
  const bottomNavRef = React.useRef(null);
  // useLayoutEffect runs synchronously after DOM mutations
  React.useLayoutEffect(() => {
    if (appBarRef.current) {
      // Get the height from the element's DOMRect and update the state
      setAppBarHeight(appBarRef.current.getBoundingClientRect().height);
    }
    if (bottomNavRef.current) {
      setBottomNavHeight(bottomNavRef.current.offsetHeight);
    }
  }, []);
  // Set the --vh CSS variable on the document root
  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--vh",
      `${viewportHeight * 0.01}px`
    );
  }, [viewportHeight]);

  return (
    <Box
      className="mainAppContainer"
      sx={{ display: "flex", flexDirection: "row" }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ display: "flex", flexDirection: "row" }}
        // ref={appBarRef}
      >
        <Toolbar ref={appBarRef}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
                display: { xs: "none", sm: open ? "none" : "block" },
              },
              // open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography> */}
        </Toolbar>
        <NavHeader />
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
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
      <Stack direction={"column"} sx={{ width: "100%" }}>
        <MainContent
          bottomMenu={bottomMenu}
          appBarHeight={appBarHeight}
          bottomNavHeight={bottomNavHeight}
          viewportHeight={viewportHeight}
        />
        <AnimatedBottomNav ref={bottomNavRef} ListData={ListData} />
      </Stack>
    </Box>
  );
}
