import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, AppBar, Toolbar, Link, CardContent, CardMedia, Grid, Snackbar, Alert } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { styled } from '@mui/system';

const AnimatedCard = styled('div')(({ theme }) => ({
  maxWidth: 345,
  margin: 'auto',
  background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  borderRadius: '10px',
  overflow: 'hidden',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
  },
}));

const Services = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const alertType = urlParams.get('alertType');
    const userName = urlParams.get('userName');

    if (alertType && userName) {
      setMessage(alertType === 'login' ? `Welcome back ${userName}!` : `Hello ${userName}, let's explore the website`);
      setOpen(true);
    } 
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const diet = () => {
    navigate('/diet');
  }
  const nutrient = () => {
    navigate('/nutrient');
  }
  const AboutUs = () => {
    navigate('/aboutus');
  }
  const Health = () => {
    navigate('/health');
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'linear-gradient(to right, #f0f0f0, #d9d9d9)' }}>
      {/* Navbar */}
      <AppBar position="static" style={{ background: '#1976d2' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div>
            <Link href="/" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none' }}>Home</Link>
            <Link onClick={AboutUs} style={{ color: '#fff', marginRight: '20px', textDecoration: 'none' }}>About Us</Link>
            <Link onClick={diet} style={{ cursor: 'pointer', color: '#fff', marginRight: '20px', textDecoration: 'none' }}>Diet</Link>
            <Link onClick={nutrient} style={{ cursor: 'pointer', color: '#fff', marginRight: '20px', textDecoration: 'none' }}>Nutrition</Link>
          </div>
          <Button onClick={handleLoginRedirect} style={{ backgroundColor: '#fff', color: '#1976d2' }}>GET STARTED</Button>
        </Toolbar>
      </AppBar>
    
      {/* Content */}
      <main style={{ flex: 1, padding: '40px', textAlign: 'center' }}>
        <Typography variant="h4" style={{ color: '#333', marginBottom: '30px' }}>
          Welcome to the Nutrition Tracker Services
        </Typography>
        <Typography variant="h6" style={{ color: '#555', marginBottom: '40px' }}>
          Our application helps children and adolescents by analyzing their dietary habits and detecting nutrient deficiencies.
          We offer personalized dietary recommendations to improve overall health and well-being.
        </Typography>

        {/* Services Cards */}
        <Grid container spacing={4} justifyContent="center">
          {/* Card 1: Personalized Dietary Recommendations */}
          <Grid item xs={12} sm={6} md={4}>
            <AnimatedCard onClick={diet}>
              <CardMedia>
                <RestaurantIcon style={{ fontSize: 60, color: '#FF9800', margin: '20px auto', display: 'block' }} />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="div" style={{ color: '#333' }}>
                  Personalized Dietary Recommendations
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ color: '#666' }}>
                  Receive customized advice based on your unique nutritional needs to stay healthy.
                </Typography>
              </CardContent>
            </AnimatedCard>
          </Grid>

          {/* Card 2: Nutrient Deficiency Detection */}
          <Grid item xs={12} sm={6} md={4}>
            <AnimatedCard onClick={nutrient}>
              <CardMedia>
                <HealthAndSafetyIcon style={{ fontSize: 60, color: '#FF9800', margin: '20px auto', display: 'block' }} />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="div" style={{ color: '#333' }}>
                  Nutrient Deficiency Detection
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ color: '#666' }}>
                  Identify and address any gaps in your nutrient intake to ensure a balanced diet.
                </Typography>
              </CardContent>
            </AnimatedCard>
          </Grid>

          {/* Card 3: Health Tracking */}
          <Grid item xs={12} sm={6} md={4}>
            <AnimatedCard onClick={Health}>
              <CardMedia>
                <FitnessCenterIcon style={{ fontSize: 60, color: '#FF9800', margin: '20px auto', display: 'block' }} />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="div" style={{ color: '#333' }}>
                  Health Tracking
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ color: '#666' }}>
                  Monitor your progress and adjust your diet plan as needed to maintain optimal health.
                </Typography>
              </CardContent>
            </AnimatedCard>
          </Grid>
        </Grid>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1976d2', padding: '20px', textAlign: 'center' }}>
        <Typography variant="body1" style={{ color: '#fff' }}>
          &copy; 2024 Nutrition Tracker. All Rights Reserved.
        </Typography>
      </footer>

      {/* Snackbar for notifications */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor: 'green' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Services;
