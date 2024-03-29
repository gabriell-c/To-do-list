import * as React from 'react';
import { Button, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Cont } from './Style'

export default function BasicTextFields({addTodo}) {

  const [text, setText] = React.useState('')
  const [id, setId] = React.useState(0)
  const [disabledCheck, setDisabled] = React.useState(true)

  const createTodo=(texts)=>{
    const todoObj = { texts: texts, id: id };
    setId(id + 1)
    addTodo(todoObj)
    document.getElementById("outlined-basic").value = ''
  }

  const chk=()=>{
    if(text === ''){
        setDisabled(true)
      }else{
        setDisabled(false)
    }
  }

  React.useEffect(()=>{
    chk()
  })

  return (
        <Cont>
            <TextField size="small" autoComplete='off' fullWidth id="outlined-basic"
            onChange={(e)=> setText(e.target.value)}
            label="Adicionar tarefa" style={{fontWeight: 'bold', letterSpacing: '1px'}}
            variant="outlined" />
            <Button id="Btn" disabled={disabledCheck} onClick={() => createTodo(text)} style={{textTransform: 'none',marginLeft:
            '1em', height: '100%', fontFamily: 'Poppins', fontWeight: 'bold'}} variant="contained">
            <AddCircleIcon  sx={{ fontSize: 20, marginRight: .5, fontWeight: 'bold'}}/>ADD</Button>
        </Cont>
  );
}