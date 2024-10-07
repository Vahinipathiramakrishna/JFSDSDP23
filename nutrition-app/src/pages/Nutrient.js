import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, TextField, Button, Card, CardContent, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Nutrient = () => {
  const navigate = useNavigate();
  const [symptoms, setSymptoms] = useState('');
  const [deficiency, setDeficiency] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setSymptoms(e.target.value);
  };

  const handleDetectNutrient = () => {
    if (!symptoms) {
      setMessage('Please enter your symptoms!');
      setOpen(true);
      return;
    }

    // Detect nutritional deficiency
    const detectedNutrient = detectNutritionalDeficiency(symptoms);
    setDeficiency(detectedNutrient);
  };

  const detectNutritionalDeficiency = (inputSymptoms) => {
    const symptomMapping = {
      hairLoss: 'Vitamin D Deficiency',
      fatigue: 'Iron Deficiency',
      brittleNails: 'Biotin Deficiency',
      bleedingGums: 'Vitamin C Deficiency',
      visionIssues: 'Vitamin A Deficiency',
      drySkin: 'Essential Fatty Acid Deficiency',
      muscleWeakness: 'Vitamin D Deficiency',
      irregularHeartBeat: 'Magnesium Deficiency',
      poorConcentration: 'Vitamin B12 Deficiency',
      mouthSores: 'Vitamin B2 Deficiency',
    };

    const symptomsArray = inputSymptoms.toLowerCase().split(',').map(symptom => symptom.trim());
    const detected = symptomsArray.map(symptom => symptomMapping[symptom]);

    return detected.filter(Boolean).length > 0
      ? detected.filter(Boolean).join(', ')
      : 'No deficiencies detected based on the symptoms provided.';
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBackToServices = () => {
    navigate('/services'); // Redirect to Services page on click
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
          <Typography variant="h6" style={{ color: '#fff' }}>Nutrition App</Typography>
          <Button onClick={handleBackToServices} style={{ backgroundColor: '#fff', color: '#1976d2' }}>
            Back to Services
          </Button>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <div style={{ padding: '20px' }}>
        <Typography variant="h5">Nutritional Deficiency Detection</Typography>
        <Card style={{ marginTop: '20px', padding: '20px' }}>
          <CardContent>
            <TextField
              label="Enter Symptoms (comma-separated)"
              variant="outlined"
              fullWidth
              value={symptoms}
              onChange={handleInputChange}
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleDetectNutrient}
              style={{ marginTop: '10px' }}
            >
              Detect Nutritional Deficiencies
            </Button>
            {deficiency && (
              <Typography variant="h6" style={{ marginTop: '20px' }}>
                Detected Nutritional Deficiency: {deficiency}
              </Typography>
            )}
          </CardContent>
        </Card>

        {/* Snackbar for notifications */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Nutrient;
