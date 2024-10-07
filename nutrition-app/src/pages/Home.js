import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/services'); // Redirect to Services page on click
  };
  
  return (
    <div style={{ background: 'linear-gradient(to right, #00C9FF, #92FE9D)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Typography variant="h1" style={{ color: '#fff', marginBottom: '20px' }}>Nutrition Tracker</Typography>
      <Typography variant="h5" style={{ color: '#fff', marginBottom: '40px' }}>
        Helping children and adolescents balance their diet and detect nutrient deficiencies.
      </Typography>
      <Button 
        variant="contained"
        style={{ backgroundColor: '#fff', color: '#00C9FF' }} 
        onClick={handleGetStarted} // Navigate on click
      >
        Get Started
      </Button>
    </div>
  );
};

export default Home;
