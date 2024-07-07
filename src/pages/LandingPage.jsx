import React from 'react';
import { Grid, Button, AppBar, Toolbar, Typography, Link, Container } from '@mui/material';
import SwipeMateImage from '../assets/images/phoneImageOfApp.png';
import NavBar from '../components/common/NavBar';

const LandingPage = () => {
  return (
  <div style={{ backgroundColor: '#ED1504', minHeight: '100vh', fontFamily: 'Bebas Neue', }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', alignItems: 'center', marginRight: 'auto', marginLeft: '20%', display: 'flex', gap: '16px', fontFamily: 'Bebas Neue',  }}>
      <Typography variant="h4" style={{ color: '#FFFFFF', flex: '0 1 auto' }}>
        SwipeMate
      </Typography>

      </div>

      <Container style={{ paddingTop: '16px', paddingBottom: '16px', fontFamily: 'Bebas Neue', }}>
        <Grid container spacing={3}>

        
        {/* Left side with h2 heading */}
        <Grid item xs={12} md={6}>
          <Grid container direction="column" alignItems="center" justifyContent="center" height="100%">
            <Grid item>
            <Typography variant="h2" component="h2" sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '4.5rem', fontFamily: 'Bebas Neue',}}>
              Let AI swipe your Tinder! Go from Simping to Pimping in 3 easy steps
            </Typography>
            </Grid>
          </Grid>
        </Grid>

          {/* Right side with image */}
        <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginTop: '20px', fontFamily: 'Bebas Neue', }}>
            <img src={SwipeMateImage} alt="Swipe Mate" style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }} />
        </Grid>
    </Grid>
  </Container>
</div>
  );
};

export default LandingPage;
