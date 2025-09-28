import { GitHub, Visibility } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const More = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <Container maxWidth="md">
      <Stack spacing={4} mb={8}>
        <Typography variant="h1">{data.name}</Typography>
        <Stack justifyContent="space-between" direction="row">
          <Stack spacing={1}>
            <Stack direction="row" spacing={1}>
              <Typography variant="h3" color="text.main">
                Duration :
              </Typography>
              <Typography variant="h3" color="primary.main">
                {data.duration}
              </Typography>
            </Stack>
            <Typography variant="h4" color="text.light">
              {`${data.readingTime} min Reading`}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Tooltip title="View Live">
              <Avatar
                alt=""
                component={Link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: "text.primary",
                }}
                to={data.liveLink}
              >
                <Visibility color="text.primary" />
              </Avatar>
            </Tooltip>
            <Tooltip title="View source code">
              <Avatar
                alt=""
                component={Link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: "text.primary",
                }}
                to={data.github}
              >
                <GitHub color="text.primary" />
              </Avatar>
            </Tooltip>
          </Stack>
        </Stack>

        <Box component="img" src={data.thumbnail} />
        <Stack
          direction="row"
          flexWrap="wrap"
          spacing={2}
          rowGap={2}
          sx={{ borderRadius: 4, marginTop: 4 }}
        >
          {data.skills.map((skill, index) => (
            <Stack
              alignItems="center"
              justifyContent="center"
              key={index}
              sx={{
                p: 1, // Add some padding for better appearance

                px: 2,

                border: "1px dashed grey",
                borderRadius: 16,
              }}
            >
              <Typography variant="h4" textAlign="center">
                {skill}
              </Typography>
            </Stack>
          ))}
        </Stack>

        <Typography variant="h3" color="text.seconday">
          {data.listDis.map((list, index) => (
            <ul key={index}>
              <li>{list}</li>
            </ul>
          ))}
        </Typography>
      </Stack>
    </Container>
  );
};

export default More;
