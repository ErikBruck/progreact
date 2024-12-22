import React, { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
function Profile() {
  const [name, setName] = useState('')
  const [hobbies, setHobbies] = useState('')
  const handleSubmit = () => {
    console.log({ name, hobbies })
  }
  return (
    <Box p={2}>
      <Typography variant="h4">Hobbies</Typography>
      <TextField
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Hobbies"
        value={hobbies}
        onChange={e => setHobbies(e.target.value)}
        fullWidth
        margin="normal"
      />
       <Button 
              variant="contained" 
              onClick={handleSubmit} 
              sx={{ backgroundColor: 'red', color: 'white' }}
            >
              Submit
            </Button>
    </Box>
  )
}
export default Profile
