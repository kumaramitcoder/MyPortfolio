import {
  Avatar,
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
// Import the skills array
import skills from "../data/mySkills";
import tools from "../data/tools";
import expertise from "../data/expertise";
import certificates from "../data/certificates";

import background from "../assets/background.png";
import ExpertiseCard from "../components/ExpertiseCard";
import { Assignment } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import Linkdin from "../components/Linkdin";
import myData from "../data/myData";
const Home = () => {
  return (
    <Stack gap={4}>
      <Linkdin />
     
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: 4,
        }}
      >
         <Typography variant="h1">
        My Expertise
      </Typography>
      <Divider/>
      <Grid container spacing={2}>
        {expertise.map((expertise, index) => (
          <Grid item xl={4} md={12} sm={12} key={index}>
            <ExpertiseCard expertise={expertise} />
          </Grid>
        ))}
      </Grid>
      </Paper>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: 4,
        }}
      >
        <Typography variant="h1">My Skills</Typography>
        <Divider />
        <Stack
          direction="row"
          flexWrap="wrap"
          // spacing={2}
          gap={1}
          rowGap={2}
          sx={{ borderRadius: 4 }}
        >
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={<Typography variant="body2">{skill.name}</Typography>}
              avatar={
                <Avatar
                  alt={skill.name}
                  src={skill.img}
                  sx={{ width: 28, height: 28 }}
                />
              }
              component={Link}
              to={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              clickable
              sx={{
                textDecoration: "none",
                // All spacing is now handled by the parent Stack's gap prop
                // The following styles are no longer needed
                // gap: 1,
                // px: 1,
                borderRadius: 16,
                "&:hover": {
                  cursor: "pointer",
                },
                margin: "0 !important", // Optional: Use this as a failsafe
              }}
            />
          ))}
        </Stack>
      </Paper>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: 4,
        }}
      >
        <Typography variant="h1">Tools</Typography>
        <Divider />
        <Stack
          direction="row"
          flexWrap="wrap"
          // spacing={2}
          gap={1}
          rowGap={2}
          sx={{ borderRadius: 4 }}
        >
          {tools.map((skill, index) => (
            <Chip
              key={index}
              label={<Typography variant="body2">{skill.name}</Typography>}
              avatar={
                <Avatar
                  alt={skill.name}
                  src={skill.img}
                  sx={{ width: 28, height: 28 }}
                />
              }
              component={Link}
              to={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              clickable
              sx={{
                textDecoration: "none",
                // All spacing is now handled by the parent Stack's gap prop
                // The following styles are no longer needed
                // gap: 1,
                // px: 1,
                borderRadius: 16,
                "&:hover": {
                  cursor: "pointer",
                },
                margin: "0 !important", // Optional: Use this as a failsafe
              }}
            />
          ))}
        </Stack>
      </Paper>

      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: 4,
        }}
      >
        <Typography variant="h1">Certificates</Typography>
        <Divider />
        <Stack
          direction="row"
          flexWrap="wrap"
          // spacing={2}
          gap={2}
          rowGap={2}
          sx={{ borderRadius: 4 }}
        >
          <Grid container spacing={2}>
            {certificates.map((certificate, index) => (
              <Grid item xl={4} md={6} sm={12}>
                <Box
                  key={index}
                  sx={{
                    gap: 2,
                    display: "flex",
                    //   justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center", // Ensure items are vertically centered
                    p: 1, // Add some padding for better appearance

                    px: 2,
                  }}
                >
                  <Avatar
                    alt={certificate.name}
                    sx={{
                      width: 68,
                      height: 60,
                      // border: "1px solid gray",
                      bgcolor: "white",
                    }}
                    variant="rounded"
                    src={certificate.logo}
                  />
                  <Stack spacing={1}>
                    <Typography
                      component={Link}
                      target="_blank" // Open link in new tab
                      rel="noopener noreferrer" // Necessary for security
                      to={certificate.url}
                      variant="h3"
                      color="text.primary"
                      sx={{ "&:hover": { color: "primary.main" } }}
                    >
                      {certificate.name}
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                      Id {certificate.id}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Home;
