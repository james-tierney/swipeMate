import React from 'react';
import MPaper from './MPaper';
import { Avatar, Box, Stack, Typography, colors } from '@mui/material';
import { images } from '../../assets';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SubtitlesIcon from '@mui/icons-material/Subtitles';

const UserBookingCard = () => {
  const bookingsData = [
    {
      userName: 'Tuat Tran',
      userProfile: images.userProfile,
      datePosted: '02 Sep 2023 09:50',
      caption: 'Cherry Blossom Trees',
      guests: 'With 5 others',
      image: images.bookingImageOne,
    },
    {
      userName: 'Jon Tim',
      userProfile: images.userProfile,
      datePosted: '12 Sep 2023 10:40',
      caption: 'Autumn Forrest Sunrise',
      guests: 'With 1 other',
      image: images.bookingImageTwo,
    },


    // Add more booking objects as needed
  ];

  return (
    <MPaper title="Latest Posts">
      {bookingsData.map((booking, index) => (
        <Stack key={index} spacing={3} mb={3}>
          {/* user info */}
          <Stack direction="row" spacing={2} mb={3}>
            <Avatar alt="user" src={booking.userProfile} />
            <Stack justifyContent="space-between">
              <Typography variant="subtitle2">
                {booking.userName}
              </Typography>
              <Typography variant="caption" color={colors.grey[500]}>
                {booking.datePosted}
              </Typography>
            </Stack>
          </Stack>
          {/* user info */}

          {/* booking info */}
          <Stack direction="row" alignItems="center" spacing={5} sx={{ color: colors.grey[600] }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <SubtitlesIcon fontSize="small" />
              <Typography variant="body2" fontWeight={600}>
                {booking.caption}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <PeopleAltOutlinedIcon fontSize="small" />
              <Typography variant="body2" fontWeight={600}>
                {booking.guests}
              </Typography>
            </Stack>
          </Stack>
          {/* booking info */}

          {/* image */}
          <Box sx={{
            pt: "100%",
            position: "relative",
            "& img": {
              position: "absolute",
              top: 0,
              height: "100%",
              width: "100%",
              borderRadius: 8
            }
          }}>
            <img src={booking.image} alt={`booking-${index}`} />
          </Box>
          {/* image */}
        </Stack>
      ))}
    </MPaper>
  );
};

export default UserBookingCard;
