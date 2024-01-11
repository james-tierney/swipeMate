import React from 'react';
import MPaper from './MPaper';
import Avatar from '@mui/material/Avatar';
import { Box, Stack, Typography, colors } from '@mui/material';
import {images} from "../../assets"
import modernArt from "../../assets/images/modern-art-17304478.webp"

const toursData = [
  {
    title: "Meeting 11.03.2022",
    value: "Created 11 Mar 2022",
    color: ""//colors.green[600]
  },
  {
    title: "Available",
    value: "Created 11 Mar 2022",
    color: colors.grey[300]
  }
];

const data = toursData[0];

const ToursData = () => {
  return (
    <MPaper title="">
      <Stack spacing={2}>
        {/* Avatar and Text content on the same row */}
        <Stack direction="row" alignItems="center" justifyContent="center" p={3}>
          {/* Avatar on the left */}
          <Avatar alt="user" src={images.cartoonAvatar} />

          {/* Text content on the right */}
          <Typography variant="h6">Tom Jackson</Typography>
        </Stack>

        {/* The rest of your content */}
        <Stack direction="row" alignItems="center" justifyContent="center" p={3}>
          {/* Replace CircularProgress with an image */}
          <Box position="relative">
            <img
              src={modernArt} // Replace with the path to your image
              alt="Tours Image"
              style={{
                width: '100%',
                height: '100%',
                // borderRadius: "50%",
              }}
            />
            {/* The rest of your content */}
            <Box sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}>
              <Typography variant="subtitle2" color={colors.grey[600]}></Typography>
              <Typography variant="h6"></Typography>
            </Box>
          </Box>
        </Stack>
        <Stack spacing={1}>
  <Stack direction="row" padding="0.3rem" justifyContent="center">
    <Stack direction="column" alignItems="center">
      <Typography variant="subtitle2" display="block" fontWeight="bold" fontSize="1.2rem">
        {data.title}
      </Typography>
      <Typography variant="subtitle2" display="block" color={colors.grey[700]}>
        {data.value}
      </Typography>
    </Stack>
  </Stack>


        </Stack>
      </Stack>
    </MPaper>
  );
};

export default ToursData;