import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Avatar, Box, Chip, Stack, Tooltip } from "@mui/material";
import { GitHub, Visibility } from "@mui/icons-material";

const ProjectCard = ({ card, buttonText }) => {
  return (
    <Card sx={{ borderRadius: 4, p: 2 }}>
      <CardMedia
        component={Link}
        to="/portofolio/more"
        height={240}
        image={card.thumbnail}
        title={card.name}
        state={card}
        sx={{
          position: "relative",
          height: 240,
          borderRadius: 4,
          border: "2.5px solid #d3d3d3",
        }}
      >
        <Box
          sx={{
            bgcolor: " rgba(0,0,0,0.2)",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 1,
            borderRadius: 4,
          }}
        />
      </CardMedia>
      <CardContent sx={{ p: 0 }}>
        <Stack
          direction="row"
          flexWrap="wrap"
          // spacing={1}
          gap={1}
          rowGap={1}
          sx={{ borderRadius: 4, py: 2 }}
        >
          {card.skills.slice(0, 8).map((skill, index) => (
            <Chip label={skill}   sx={{
              fontSize: '0.75rem', // Adjust this value as needed
              height: '24px',       // Optional: reduce chip height
              padding: '0 0px',
              ml: 0     // Optional: adjust horizontal padding
            }} />
            // <Box
            //   key={index}
            //   sx={{
            //     p: 1, // Add some padding for better appearance

            //     px: 0.5,
            //     py: 1,
            //     border: "1px dashed grey",
            //     borderRadius: 16,
            //   }}
            // >
            //   <Typography variant="h4">{skill}</Typography>
            // </Box>
          ))}
        </Stack>
        <Typography gutterBottom variant="h2" component="div">
          {card.name}
        </Typography>
        <Box>
          <Typography
            variant="h3"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3, // Change this to your desired number of lines
              WebkitBoxOrient: "vertical",
            }}
          >
            {card.shortDis}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ width: "100%", p: 0, mt: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Stack direction="row" spacing={2}>
            <Button
              size="small"
              component={Link}
              target="_blank"
              rel="noopener noreferrer"
              to={card.liveLink}
              variant="contained"
              sx={{borderRadius:4}}
              startIcon={<Visibility />}
            >
              {buttonText ? buttonText : "View Live"}
            </Button>
            <Button
              size="small"
              component={Link}
              to="/portofolio/more"
              state={card}
            >
              Learn More
            </Button>
          </Stack>

          <Tooltip title="View source code">
            <Avatar
              alt=""
              component={Link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: 24,
                height: 24,
                backgroundColor: "primary.contrastText",
              }}
              to={card.github}
            >
              <GitHub color="primary.contrastText" />
            </Avatar>
          </Tooltip>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
