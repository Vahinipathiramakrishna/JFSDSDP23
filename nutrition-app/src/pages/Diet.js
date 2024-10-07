import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, AppBar, Toolbar, Link, Grid, Snackbar, Alert, Card, CardContent, CardMedia } from '@mui/material';

const Diet = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  useEffect(() => {
    setMessage("Explore our dietary tips and resources!");
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleBackToServices = () => {
    navigate('/services'); // Redirect to Services page on click
  };

  const log = () => {
    navigate('/login'); // Redirect to Services page on click
  };

  // Dietary tips with image URLs
  const dietTips = [
    {
      tip: "Eat a variety of foods to get all necessary nutrients.",
      imageUrl: "https://res.cloudinary.com/grohealth/image/upload/v1651751109/i_Stock_1179272859_scaled_3b5f353e12.jpg"
    },
    {
      tip: "Incorporate plenty of fruits and vegetables into your meals.",
      imageUrl: "https://gethealthyu.com/wp-content/uploads/2016/06/shutterstock_105958283.jpg"
    },
    {
      tip: "Stay hydrated by drinking plenty of water throughout the day.",
      imageUrl: "https://belvoir-university-health.s3.amazonaws.com/media/2020/12/07180756/dreamstime_xs_44066082.jpg"
    },
    {
      tip: "Limit processed foods and added sugars.",
      imageUrl: "https://www.adityabirlacapital.com/healthinsurance/active-together/wp-content/uploads/2022/11/Harmful-Processed-Foods-1200x900.jpg"
    },
    {
      tip: "Choose whole grains over refined grains.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1B_zhepewsArkg6AsRo4-vB67Vs-6DqpCg&s"
    },
    {
      tip: "Monitor portion sizes to avoid overeating.",
      imageUrl: "https://houstonheartburn.com/wp-content/uploads/2015/05/PortionControl2.jpg"
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'linear-gradient(to right, #e0f7fa, #b2ebf2)' }}>
      {/* Navbar */}
      <AppBar position="static" style={{ background: '#1976d2' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div>
            <Link href="/" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none' }}>Home</Link>
            <Link href="/services" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none' }}>Services</Link>
            <Link href="/nutrient" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none' }}>Detect Nutritional Deficiency</Link>
            <Link onClick={handleBackToServices} style={{ cursor: 'pointer', color: '#fff', marginRight: '20px', textDecoration: 'none' }}>Back to Services</Link>
          </div>
          <Button onClick={log} style={{ backgroundColor: '#fff', color: '#1976d2' }}>Login</Button>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <main style={{ flex: 1, padding: '40px', textAlign: 'center' }}>
        <Typography variant="h4" style={{ color: '#333', marginBottom: '30px' }}>
          Dietary Tips & Resources
        </Typography>
        <Typography variant="h6" style={{ color: '#555', marginBottom: '40px' }}>
          Here are some valuable dietary tips to maintain a balanced diet:
        </Typography>

        {/* Tips Section */}
        <Grid container spacing={4} justifyContent="center">
          {dietTips.map((tip, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={tip.imageUrl}
                  alt={tip.tip}
                />
                <CardContent>
                  <Typography variant="body1" style={{ color: '#333', marginBottom: '20px', fontWeight: 'bold', backgroundColor: '#e0f7fa', padding: '10px', borderRadius: '5px' }}>
                    {tip.tip}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>

      {/* Snackbar for notifications */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Diet;
