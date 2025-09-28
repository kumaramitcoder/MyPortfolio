import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import myData from "../data/myData";

const NavHeader = () => {
  return (
  
      <Stack direction={"row"} gap={2} alignItems={"center"} sx={{py:2}}>
        <Avatar src={myData.profilePic} />
        <Stack gap={0.5}>
          <Typography variant="h2">{myData.name}</Typography>
          <Typography variant="h5" color={"text.secondary"}>
            {myData.bio}
          </Typography>
        </Stack>
      </Stack>
    
  );
};

export default NavHeader;
