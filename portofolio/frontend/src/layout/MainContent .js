import React from "react";
import { Outlet } from "react-router-dom";
import { Download } from "@mui/icons-material";
import Footer from "./Footer";
import { Fab, useMediaQuery, useTheme } from "@mui/material";
import { Stack } from "@mui/material";

const MainContent = ({ bottomNavHeight, appBarHeight }) => {
  const driveDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1UZLl8-u5mdVEmdjzaVY34j8it0clqQ0Q";

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs")); // strictly xs
  return (
    <>
      <Stack
        //   minHeight="100vh"
        component="main"
        sx={{
          display: "relative",
          flexGrow: 1,
          p: 3,
          pt: `${appBarHeight + 24}px`,
          overflowY: "auto",
          // maxHeight: `${100-bottomNavHeight-appBarHeight}vh`,
          // height: `calc(var(--vh, 1vh) * 100 - ${bottomNavHeight}px)`,
          height: `calc(100dvh - ${bottomNavHeight}px)`,

          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#1f2937", // Dark blue background color
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#3C454A ", // Dark blue thumb color
            borderRadius: "4px",
          },
          "::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        {/* <DrawerHeader sx={{ display: { xs: "block", sm: "none" } }} /> */}

        <Outlet />
        <Footer />
        <Fab
          color="primary"
          aria-label="download"
          variant={isXs ? "circular" : "extended"}
          size={isXs ? "medium" : "large"}
          component="a"
          href={driveDownloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: "fixed",
            right: 40,
            bottom: 80,
            zIndex: 1000,
            padding: isXs ? 1 : 2,
          }}
        >
          <Download fontSize={isXs ? "small" : "medium"} />
          {!isXs && "Download Resume"}
        </Fab>
      </Stack>
    </>
  );
};

export default MainContent;
