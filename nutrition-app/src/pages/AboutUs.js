import React from 'react';
import { AppBar, Toolbar, Typography, Container, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const Services = () => {
    navigate('/services'); // Redirect to Home page on click
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
          <Button onClick={Services} style={{ backgroundColor: '#fff', color: '#1976d2' }}>
            Back to Home
          </Button>
        </Toolbar>
      </AppBar>

      {/* About Us Content */}
      <Container style={{ marginTop: '40px' }}>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>About Us</Typography>
            <Typography variant="body1" paragraph>
              Welcome to the Nutrition App, your trusted source for understanding and addressing nutritional deficiencies. 
              Our mission is to empower individuals by providing a simple, accessible tool for detecting potential nutrient shortfalls based on symptoms.
              We believe that proper nutrition is the foundation of a healthy life, and our app aims to help you maintain optimal well-being.
            </Typography>
            <Typography variant="body1" paragraph>
              Whether you're experiencing fatigue, hair loss, or other symptoms, our app helps you identify possible nutritional deficiencies 
              and guides you on how to address them. By combining expert knowledge with easy-to-use technology, 
              we're here to make nutrition simpler and more transparent for everyone.
            </Typography>
            <Typography variant="body1" paragraph>
              Thank you for choosing the Nutrition App. Your health is our priority!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={Services}
              style={{ marginTop: '20px' }}
            >
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default AboutUs;
