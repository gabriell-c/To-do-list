import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { TextField } from '@mui/material'
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditItemDialog({open, Dial, todo, editTodo}) {

  const [newText, setNewText] = React.useState(todo.texts)

  const textHandler=()=>{
    editTodo(todo.id, newText)
    Dial()
  }

  return (
      <Dialog
        open={open} TransitionComponent={Transition}
        keepMounted fullWidth onClose={Dial}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Editando item de tarefa"}</DialogTitle>
        <DialogContent>
          <TextField defaultValue={newText} fullWidth
          onChange={(e) => setNewText(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={Dial} >Cancelar</Button>
          <Button onClick={textHandler}>Ok</Button>
        </DialogActions>
      </Dialog>
  );
}
