import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button 
        variant="contained" 
        onClick={handleSubmit} 
        sx={{ backgroundColor: 'red', color: 'white' }}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
