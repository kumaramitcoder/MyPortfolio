import { Avatar, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ExperieneCard = ({ experience }) => {

  const[more, setMore] = useState(true)


  const handleClick = (e)=>{

    setMore(!more)
  

  }
  return (
    <Paper sx={{ borderRadius: 4, p: 4 }}>
      <Stack
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { sx: "column", lg: "row" },
        }}
      >
        <Avatar
          variant="rounded"
          alt={experience.company}
          sx={{ width: 40, height: 40, bgcolor: "white" }}
          src={experience.logo}
        />
        <Stack spacing={2} sx={{ width: "100%" }} m={0}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h2">{experience.title}</Typography>
            <Typography variant="h4">{experience.date}</Typography>
          </Stack>
          <Typography
            variant="h3"
            color="primary.main"
            target="_blank"
            rel="noopener noreferrer"
            component={Link}
            to={experience.website}
          >
            {`${experience.company} - ${experience.employmentType}`}
          </Typography>
          <Typography variant="h4">
            {`${experience.location} . (${experience.jobType})`}
          </Typography>

          <Typography
            // sx={{ display: "inline" }}
            variant="h3"
            color="text.secondary"
          >
            {more
              ? experience.listDis.slice(0, 4).map((point) => (
                  <ul>
                    <li>{point}</li>
                  </ul>
                ))
              : experience.listDis.map((point) => (
                  <ul>
                    <li>{point}</li>
                  </ul>
                ))}
            {/* {more
              ? experience.dis.split(" ").slice(0, 142).join(" ")
              : experience.dis} */}
            <Typography
              onClick={handleClick}
              variant="h3"
              sx={{ display: "inline", cursor: "pointer" }}
              color="primary.main"
            >
              {more ? "....more" : "less"}
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ExperieneCard;
