import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import {
  graphic,
  mernStack,
  Ui,
  backend,
  androidDevelopment,
} from "../data/portofolio";
import UiCard from "../components/UiCard";
import Graphic from "../components/Graphic";

const Portofolio = () => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Typography sx={{ mt: 0, mb: 4 }} variant="h1">
        Full Stack
      </Typography>

      <Grid container spacing={4}>
        {mernStack.map((card, index) => (
          <Grid key={index} item xl={4} md={12} sm={12}>
            <ProjectCard card={card} />
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ mt: 8 }} />
      <Typography sx={{ mt: 4, mb: 4 }} variant="h1">
        Android Development
      </Typography>

      <Grid container spacing={4}>
        {androidDevelopment.map((card, index) => (
          <Grid key={index} item xl={4} md={12} sm={12}>
            <ProjectCard card={card} />
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ mt: 8 }} />
      <Typography sx={{ mt: 4, mb: 4 }} variant="h1">
        Backend
      </Typography>

      <Grid container spacing={4}>
        {backend.map((card, index) => (
          <Grid key={index} item xl={4} md={12} sm={12}>
            <ProjectCard card={card} />
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ mt: 8 }} />
      <Typography sx={{ mt: 4, mb: 4 }} variant="h1">
        UI/ UX
      </Typography>
      <Grid container spacing={4}>
        {Ui.map((card, index) => (
          <Grid item key={index} xl={4} md={12} sm={12}>
            <UiCard card={card} buttonText={"View Postman Doc"} />
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ mt: 8 }} />
      <Typography sx={{ mt: 4, mb: 4 }} variant="h1">
        Graphic Design
      </Typography>
      <Grid container spacing={4}>
        {graphic.map((card, index) => (
          <Grid item key={index} xl={4} md={12} sm={12}>
            <Graphic card={card} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Portofolio;
