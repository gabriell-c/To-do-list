import * as React from 'react';
import { Button, Paper, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Cont } from './Style'
import  { useState } from 'react'

export default function BasicTextFields({addTodo}) {

  const [text, setText] = useState('')
  const [id, setId] = useState(0)

  const createTodo=(texts)=>{
    const todoObj = { texts: texts, id: id };
    setId(id + 1)
    addTodo(todoObj)
    document.getElementById("outlined-basic").value = ''

  }


  return (
    <Paper>
        <Cont>
            <TextField size="small" fullWidth id="outlined-basic"
            onChange={(e)=> setText(e.target.value)}
            label="Adicionar tarefa" style={{fontWeight: 'bold', letterSpacing: '1px'}}
            variant="outlined" />
            <Button id="Btn" onClick={() => createTodo(text)} style={{textTransform: 'none',marginLeft:
            '1em', height: '100%', fontFamily: 'Poppins', fontWeight: 'bold'}} variant="contained">
            <AddCircleIcon  sx={{ fontSize: 20, marginRight: .5, fontWeight: 'bold'}}/>ADD</Button>
        </Cont>
    </Paper>
  );
}