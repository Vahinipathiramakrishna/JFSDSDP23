import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Register = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: 'male',
    exerciseDuration: '',
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleGenderChange = (e) => {
    setUserDetails({ ...userDetails, gender: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the name in localStorage and set a registration success message
    localStorage.setItem('userName', userDetails.name);
    localStorage.setItem('welcomeMessage', `Hello ${userDetails.name}, let's explore the website!`);

    // Redirect to the services page
    navigate('/services');
  };

  return (
    <div style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2022/03/05/16/55/healthy-7049781_960_720.jpg")', // Replace with your image URL
      backgroundSize: 'cover', // Ensures the image covers the entire area
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',  }}>
      <Typography variant="h4" style={{ color: '#333', marginBottom: '20px' }}>Register</Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <TextField label="Name" name="name" value={userDetails.name} onChange={handleChange} variant="outlined" style={{ marginBottom: '20px' }} />
        <TextField label="Email" name="email" value={userDetails.email} onChange={handleChange} variant="outlined" style={{ marginBottom: '20px' }} />
        <TextField label="Password" name="password" value={userDetails.password} onChange={handleChange} type="password" variant="outlined" style={{ marginBottom: '20px' }} />
        <TextField label="Age" name="age" value={userDetails.age} onChange={handleChange} variant="outlined" style={{ marginBottom: '20px' }} />
        
        {/* Gender Selection */}
        <FormControl component="fieldset" style={{ marginBottom: '20px' }}>
          <Typography variant="body1">Gender</Typography>
          <RadioGroup value={userDetails.gender} onChange={handleGenderChange}>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        {/* Duration of Exercise */}
        <FormControl variant="outlined" style={{ marginBottom: '20px' }}>
          <Typography variant="body1">Duration of Exercise</Typography>
          <Select
            name="exerciseDuration"
            value={userDetails.exerciseDuration}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Duration of Exercise' }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="2-3 times a week">2-3 times a week</MenuItem>
            <MenuItem value="rarely">Rarely</MenuItem>
            <MenuItem value="never">Never</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" style={{ backgroundColor: '#00C9FF', color: '#fff' }}>Create Account</Button>
      </form>
    </div>
  );
};

export default Register;
