import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const ExpertiseCard = ({ expertise }) => {
  return (
    <Box sx={{ borderRadius: 4, p: 4, border:'1px solid gray'}}>
      <Stack spacing={1}>
        <Typography variant="h2">{expertise.title}</Typography>
        <Typography variant="h3" color="text.secondary"  sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 8, // Change this to your desired number of lines
              WebkitBoxOrient: "vertical",
            }}>
          {expertise.para}
        </Typography>
      </Stack>
    </Box>
  );
};

export default ExpertiseCard;
