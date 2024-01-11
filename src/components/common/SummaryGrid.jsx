import React from 'react';
import { images } from "../../assets";
import { Box, Grid, Stack, Typography, colors } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Animate from "./Animate";
import MPaper from './MPaper';

const summaryData = [
  {
    title: "James Tinpot",
    value: "Profile",
    image: images.profilePicture
  },
  {
    title: "Notifications",
    value: "10",
    image: images.notificationBell
  },
  {
    title: "Days as Member",
    value: "21",
    image: images.calendar
    // icon: <CalendarTodayIcon />,
  }
  
];

const SummaryGrid = () => {
  return (
    <Grid container spacing={3}>
      {summaryData.map((summary, index) => (
        <Grid key={index} item xs={12} lg={4}>
          <Animate type="fade" delay={(index + 1) / 3}>
            <MPaper>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack spacing={1}>
                  <Typography variant="h4" fontWeight="bold">
                    {summary.value}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" color={colors.grey[600]}>
                    {summary.title}
                  </Typography>
                </Stack>
                <Box sx={{
                  height: "100px",
                  width: "100px",
                  "& img": { width: "100%" }
                }}>
                  {summary.image ? (
                    <img src={summary.image} alt="summary" />
                  ) : null}
                  {summary.icon ? (
                    <Box color={"red"} fontSize="3rem">
                      {summary.icon}
                    </Box>
                  ) : null}
                </Box>
              </Stack>
            </MPaper>
          </Animate>
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryGrid;