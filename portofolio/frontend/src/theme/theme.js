import { createTheme } from "@mui/material/styles";

const theme = (mode) =>
  createTheme({
    typography: {
      h1: {
        fontSize: "1.4rem", // Adjusted for better readability
        fontWeight: 800,
      },
      h2: {
        fontSize: "1rem",
        fontWeight: 400,
      },
      h3: {
        fontSize: "0.8rem", // Adjusted for better readability
        fontWeight: 400,
      },
      h4: {
        fontSize: "0.7rem", // Adjusted for better readability
        // fontWeight: 100, // Adjusted for better readability
        // color: "#919EAB",
      },
      h5: {
        fontSize: "0.6rem", // Adjusted for better readability
        // fontWeight: 100, // Adjusted for better readability
        // color: "#919EAB",
      },
    },
    palette: {
      mode: mode,
      primary: {
        light: "#dff2ee",
        main: mode === "dark" ? "#00ED64" : "#00684A",
        dark: "#023490",
        contrastText: "#FFFFFF",
        // Additional variants if needed
      },
      secondary: {
        main: "#ff4081", // Example secondary color
      },
      error: {
        main: "#f44336", // Example error color
      },
      warning: {
        main: "#ff9800", // Example warning color
      },
      info: {
        main: "#2196f3", // Example info color
      },
      success: {
        main: "#4caf50", // Example success color
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#000000", // Example primary text color based on mode
        secondary: mode === "dark" ? "#b0bec5" : "#757575", // Example secondary text color based on mode
        disabled: mode === "dark" ? "#757575" : "#b0bec5", // Example disabled text color based on mode
        hint: mode === "dark" ? "#78909c" : "#cfd8dc", // Example hint text color based on mode
      },
      background: {
        default: mode === "dark" ? "#001E2B" : "#F4F6F8",
        paper: mode === "dark" ? "#112733" : "#FFFFFF",
      },
      hover: {
        primary: {
          main: mode === "dark" ? "#024964" : "#00BFA5", // Example hover color for primary elements
        },
        // Define more hover states as needed
      },
      // Secondary palette if needed
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            "&:hover": {
              backgroundColor: mode === "dark" ? "#024964" : "#00BFA5", // Example hover color for MuiButton
            },
          },
        },
      },
      // Additional component customizations as needed
    },
  });

export default theme;
