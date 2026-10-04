import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from 'react';

//functional component
function App() {
  const[nombre,setNombre] = useState("");
  const handleSaludo = () => {
    //setNombre("Nicolas");



   };

  return <Box 
      className="text-center"
      component="form"
      noValidate
      autoComplete="off"
    >
      
    <div className="text-center">
      <h1>Hola mundo {nombre} </h1>
    </div>

    <div className="mb-3">
      <TextField  variant="standard" 
      value={nombre} onChange={(e)=>setNombre(e.target.value)}/> 
    </div>

    <div className="mb-3 pt-2">
      <Button onClick={handleSaludo} variant="contained">Saludame</Button>
    </div>

  </Box>;
}

export default App
