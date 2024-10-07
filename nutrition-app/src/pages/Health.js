import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, TextField, Button, Card, CardContent, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Health = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleTrackHealth = () => {
    if (!weight || !height) {
      setMessage('Please enter both weight and height!');
      setOpen(true);
      return;
    }

    const heightInMeters = height / 100;
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(calculatedBmi);

    if (calculatedBmi < 18.5) {
      setMessage('Your BMI indicates you are underweight.');
    } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
      setMessage('Your BMI is normal.');
    } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
      setMessage('Your BMI indicates you are overweight.');
    } else {
      setMessage('Your BMI indicates you are obese.');
    }

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBackToServices = () => {
    navigate('/services'); // Redirect to Services page
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      background: 'linear-gradient(to right, #e0f7fa, #b2ebf2)', 
      padding: '20px' 
    }}>
      {/* Navbar */}
      <AppBar position="static" style={{ background: '#1976d2' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" style={{ color: '#fff' }}>Health Tracking</Typography>
          <Button onClick={handleBackToServices} style={{ backgroundColor: '#fff', color: '#1976d2' }}>
            Back to Services
          </Button>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <div style={{ padding: '20px' }}>
        <Typography variant="h5">Track Your Health</Typography>
        <Card style={{ marginTop: '20px', padding: '20px' }}>
          <CardContent>
            <TextField
              label="Enter Weight (kg)"
              variant="outlined"
              fullWidth
              value={weight}
              onChange={handleWeightChange}
              style={{ marginBottom: '10px' }}
            />
            <TextField
              label="Enter Height (cm)"
              variant="outlined"
              fullWidth
              value={height}
              onChange={handleHeightChange}
              style={{ marginBottom: '10px' }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleTrackHealth}
              style={{ marginTop: '10px' }}
            >
              Calculate BMI
            </Button>
            {bmi && (
              <Typography variant="h6" style={{ marginTop: '20px' }}>
                Your BMI: {bmi}
              </Typography>
            )}
          </CardContent>
        </Card>

        {/* Snackbar for notifications */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Health;
