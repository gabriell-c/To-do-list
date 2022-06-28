import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Paper } from '@mui/material'
import EditItemDialog from './EditItemDialog'

export default function CheckboxList({todo, deleteItem, editTodo}) {

  const [openDialog, setopenDialog] = React.useState(false);
  const [check, setCheck] = React.useState(false);

  const Dial=()=>{
    setopenDialog(!openDialog)
  }

  const itemRisk=()=>{
    setCheck(!check)
  }

  return (
    <>
      <EditItemDialog editTodo={editTodo} open={openDialog} Dial={Dial} todo={todo}/>
      <Paper style={{padding: '.4em 0'}}>
        <ListItem
          secondaryAction={
            <div style={{ cursor: 'pointer'}}>
              <EditIcon  style={{marginRight: '.2em'}} sx={{ color: 686868[500] }}
                onClick={()=> setopenDialog(true)}/>
              <DeleteIcon  onClick={() => deleteItem(todo.id)} sx={{ color: 686868[500] }}/>
            </div>
          }
          disablePadding>

          <ListItemButton style={{maxWidth: '90%'}} role={undefined} dense>
            <ListItemIcon>
              <Checkbox id="Checkbo" onClick={itemRisk} edge="start" tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText style={{opacity: check ? '75%' : '100%',
            textDecoration:  check ? 'line-through' : 'none',
            }} primary={todo.texts}/>
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}
