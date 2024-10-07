import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

const Login = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('user');
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Assuming login is successful
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      localStorage.setItem('welcomeMessage', `Welcome back ${storedName}!`);
    }

    // Redirect to services page
    navigate('/services');
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div style={{ backgroundImage: 'url("https://as2.ftcdn.net/v2/jpg/01/84/03/33/1000_F_184033316_CUb2OKMszuLtqaK9tVmBhu1m8P1IxlQ0.jpg")', // Replace with your image URL
      backgroundSize: 'cover', // Ensures the image covers the entire area
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column', }}>
      <Typography variant="h4" style={{ color: '#333', marginBottom: '20px' }}>Login</Typography>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" style={{ marginBottom: '20px' }} />
        <TextField label="Password" type="password" variant="outlined" style={{ marginBottom: '20px' }} />
        <FormControl variant="outlined" style={{ marginBottom: '20px' }}>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Category' }}
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" style={{ backgroundColor: '#00C9FF', color: '#fff' }} required>Login</Button>
      </form>

      <Typography variant="body1" style={{ marginTop: '20px', cursor: 'pointer', color: '#00C9FF' }} onClick={handleRegisterRedirect}>
        New Here? Register
      </Typography>

    </div>
  );
};

export default Login;
