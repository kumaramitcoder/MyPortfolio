import {
  Avatar,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
// import ProfilePic from "../assets/defaultProfile.jpg";
import CircularWithValueLabel from "./circularProgress";
import LinearWithValueLabel from "./LinearProgress";
import { Download, GitHub, LinkedIn, Mail } from "@mui/icons-material";
// import resumePdf from "../assets/pdf/resume.pdf";
import myData from "../data/myData.js";
import competencies from "../data/competencies.js";

const LeftDrawer = () => {
  const resumePdf =
    "https://drive.google.com/uc?export=download&id=1UZLl8-u5mdVEmdjzaVY34j8it0clqQ0Q";

  return (
    <Stack
      p={2}
      mb={5}
      spacing={2}
      sx={{

        overflowY: "auto",
        maxHeight: "calc(var(--vh, 1vh) * 100", // Adjust as needed
        "&::-webkit-scrollbar": {
          width: "2px",
        },
        "&::-webkit-scrollbar-track": {
          background: "gray", // Dark blue background color
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#3C454A", // Dark blue thumb color
          borderRadius: "4px",
          width:'4px',
          // m:-4
          
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
        // width:"292px"
      }}
    >
      <Paper sx={{ borderRadius: 2 }}>
        <Stack spacing={1} justifyContent="center" alignItems="center" p={4}>
          <Avatar
            alt={myData.name}
            sx={{ width: 100, height: 100 }}
            src={myData.profilePic}
          />
          <Typography color="text.primary" variant="h3" textAlign="center">
            {myData.name}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ textWrap: "wrap" }}
            variant="h4"
            textAlign="center"
          >
            {myData.bio}
          </Typography>
        </Stack>
      </Paper>
      <Paper sx={{ borderRadius: 2 }}>
        <Stack
          spacing={1}
          justifyContent="flex-start"
          alignItems="flex-start"
          p={1}
          py={2}
        >
          <Typography variant="h3">Contact</Typography>
          <Stack
            justifyContent="flex-start"
            flexWrap="wrap"
            rowGap={1}
            sx={{ width: "100%" }}
          >
            <Typography color="primary.main" variant="h4">
              Email :
            </Typography>
            <Typography color="text.secondary" variant="h4">
              {myData.email}
            </Typography>
          </Stack>
          <Stack
            justifyContent="flex-start"
            flexWrap="wrap"
            rowGap={1}
            sx={{ width: "100%" }}
          >
            <Typography color="primary.main" variant="h4">
              Mobile Number :
            </Typography>
            <Typography color="text.secondary" variant="h4">
              {myData.phone}
            </Typography>
          </Stack>
        </Stack>
      </Paper>

      <Paper sx={{ borderRadius: 2 }}>
        <Stack
          spacing={1}
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ width: "100%" }}
          p={1}
          py={2}
        >
          <Typography variant="h3">Personal</Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            flexWrap="wrap"
            rowGap={1}
            sx={{ width: "100%" }}
          >
            <Typography color="primary.main" variant="h4" textAlign="center">
              Residence :
            </Typography>
            <Typography color="text.secondary" variant="h4" textAlign="center">
              {myData.residence}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            flexWrap="wrap"
            rowGap={1}
            sx={{ width: "100%" }}
          >
            <Typography color="primary.main" variant="h4" textAlign="center">
              City:
            </Typography>
            <Typography color="text.secondary" variant="h4" textAlign="center">
              {myData.city}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            flexWrap="wrap"
            rowGap={1}
            sx={{ width: "100%" }}
          >
            <Typography color="primary.main" variant="h4" textAlign="center">
              Age:
            </Typography>
            <Typography color="text.secondary" variant="h4" textAlign="center">
              {myData.age}
            </Typography>
          </Stack>
        </Stack>
      </Paper>
      <Paper sx={{ borderRadius: 2 }}>
        <Stack spacing={1} justifyContent="space-around" p={1} py={2}>
          <Typography variant="h3">Languages</Typography>
          <Stack
            spacing={1}
            justifyContent="space-around"
            alignItems="center"
            direction="row"
            p={1}
            py={2}
          >
            {myData.languages.map((language, index) => (
              <Stack spacing={1} alignItems="center" justifyContent="center">
                <CircularWithValueLabel
                  percentage={language.percent}
                  sx={{ width: 50, height: 50 }}
                />
                <Typography variant="h4">{language.name}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Paper>

      <Paper sx={{ borderRadius: 2 }}>
        <Stack spacing={1} justifyContent="space-around" p={1} py={2}>
          <Typography variant="h3">Expertise and Competencies</Typography>
          <Stack spacing={1} justifyContent="space-around" p={1} py={2}>
            {competencies.map((competencie, index) => (
              <Stack justifyContent="center" key={index}>
                <Typography variant="h4">{competencie.skill}</Typography>
                <LinearWithValueLabel percentage={competencie.percent} />
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Paper>

      <Button
        download
        component="a"
        href={resumePdf}
        variant="contained"
        endIcon={<Download />}
      >
        Download Resume
      </Button>
      <Paper
        elevation={4}
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          spacing: 8,
          p: 0.4,
          m: 0,
        }}
      >
        <IconButton
          aria-label="Email"
          component="a"
          href={`mailto:${myData.email}`}
          // href="mailto:Kr.shubhamgupta1999@gmail.com"
        >
          <Mail />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          component="a"
          href={myData.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          component="a"
          href={myData.gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </IconButton>
      </Paper>
    </Stack>
  );
};

export default LeftDrawer;
