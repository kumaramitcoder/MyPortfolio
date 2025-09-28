import React, { useState } from "react";
import {
  Avatar,
  Paper,
  Stack,
  Typography,
  Grid,
  IconButton,
  Link as MuiLink,
  TextField,
  Button,
  Container,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faBehanceSquare,
  faDribbbleSquare,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "@mui/material";
import { Send } from "@mui/icons-material";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import myData from "../data/myData";

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "This field is required.";
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)
      ? ""
      : "Email is not valid.";
    tempErrors.message = formData.message ? "" : "This field is required.";
    setErrors({ ...tempErrors });
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true); // Set loading to true when the form is submitted Testing
      axios
        .post(process.env.REACT_APP_API_URL, formData)
        .then((response) => {
          const data = response.data;
          if (data.success) {
            setSuccessMessage(data.message);
            setFormData({ name: "", email: "", message: "" }); // Clear form fields Amit Kumar
            setOpenSnackbar(true); // Open Snackbar
          } else {
            setErrorMessage(data.message);
          }
        })
        .catch((error) => {
          setErrorMessage(
            "There was an error sending your message. Please try again. yes pleae"
          );
        })
        .finally(() => {
          setLoading(false); // Set loading to false when the request is complete
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Stack>
      <Typography sx={{ mt: 0, mb: 4 }} variant="h1">
        Contact Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Paper sx={{ borderRadius: 4, p: 4 }}>
            <Stack spacing={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap={1}
              >
                <Typography variant="h3" color="primary.main">
                  Country:
                </Typography>
                <Typography variant="h3">{myData.residence}</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap={1}
              >
                <Typography variant="h3" color="primary.main">
                  City:
                </Typography>
                <Typography variant="h3">{myData.city}</Typography>
              </Stack>
              {myData.company && (
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="h3" color="primary.main">
                    Company:
                  </Typography>
                  <Typography variant="h3">{myData.company}</Typography>
                </Stack>
              )}
            </Stack>
          </Paper>
        </Grid>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Paper sx={{ borderRadius: 4, p: 4 }}>
            <Stack spacing={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap={1}
              >
                <Typography variant="h3" color="primary.main">
                  Email:
                </Typography>
                <Typography variant="h3">{myData.email}</Typography>
              </Stack>
              <Stack
                direction="row"
                flexWrap="wrap"
                rowGap={1}
                justifyContent="space-between"
              >
                <Typography variant="h3" color="primary.main">
                  LinkedIn:
                </Typography>
                <Typography variant="h3">
                  <MuiLink
                    component={Link}
                    to={myData.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "text.primary" }}
                  >
                    https://www.linkedin.com/in/amit-kumar-432781a8/
                  </MuiLink>
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap={1}
              >
                <Typography variant="h3" color="primary.main">
                  Mobile Number:
                </Typography>
                <Typography variant="h3">{myData.phone}</Typography>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      <Stack direction="row" justifyContent="center" sx={{ mt: 4, mb: 4 }}>
        <IconButton
          aria-label="Email"
          component="a"
          href={`mailto:${myData.email}`}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: theme.palette.primary.main }}
            size="1x"
          />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          component="a"
          href={myData.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: theme.palette.primary.main }}
            size="1x"
          />
        </IconButton>
        <IconButton
          aria-label="Behance"
          component="a"
          href={myData.behance}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faBehanceSquare}
            style={{ color: theme.palette.primary.main }}
            size="1x"
          />
        </IconButton>
        <IconButton
          aria-label="Dribbble"
          component="a"
          href={myData.dribbble}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faDribbbleSquare}
            style={{ color: theme.palette.primary.main }}
            size="1x"
          />
        </IconButton>
      </Stack>

      <Typography sx={{ mb: 4 }} variant="h1">
        Get In Touch
      </Typography>
      <Container maxWidth="sm">
        <Paper sx={{ borderRadius: 4, p: 4 }}>
          <Stack spacing={2} component="form" onSubmit={handleSubmit}>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              required
              fullWidth
              value={formData.name}
              onChange={handleInputChange}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              required
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              id="message"
              name="message"
              label="Message"
              multiline
              rows={4}
              fullWidth
              value={formData.message}
              onChange={handleInputChange}
              error={!!errors.message}
              helperText={errors.message}
            />
            <Button
              variant="contained"
              type="submit"
              endIcon={!loading && <Send />}
              disabled={loading} // Disable the button while loading
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "SEND"
              )}
            </Button>
          </Stack>
          {successMessage && (
            <Typography color="success.main">{successMessage}</Typography>
          )}
          {errorMessage && (
            <Typography color="error.main">{errorMessage}</Typography>
          )}
        </Paper>
      </Container>

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Contact;
