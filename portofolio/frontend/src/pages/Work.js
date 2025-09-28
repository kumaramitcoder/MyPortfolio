import { Avatar, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import ExperieneCard from "../components/ExperieneCard";
import experiences from "../data/experiences";
const Work = () => {
  return (
    <Stack spacing={4}>
      <Typography sx={{ mt: 4, mb: 4 }} variant="h1">
        Experience
      </Typography>
      {experiences.map((experience, index) => (
        <ExperieneCard key={index} experience={experience} />
      ))}
    </Stack>
  );
};

export default Work;
