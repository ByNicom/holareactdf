import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

//functional component
function App() {
  const[nombre,setNombre] = useState("");
  const handleSaludo = () => {
    //setNombre("Nicolas");
   };
  const[open,setOpen] = useState(false);

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
      <Button disabled={open} variant="outlined" onClick={()=>{setOpen(true);}}>Saludame</Button>
    </div>
{open &&(<Alert action ={<IconButton aria-label="close" size="small" onClick={()=> {setOpen(false);}}> <CloseIcon /></IconButton>}>Cuidado {" "+nombre}</Alert>
 )} 
 </Box>;
}

export default App
