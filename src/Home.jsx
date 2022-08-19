import Form from './components/Form';
import TodoItem from './components/List';
import * as S from './components/Style';
import { List , Paper, TextField} from '@mui/material'
import * as React from 'react'

export default function Home() {

  const [todos, setTodos] = React.useState([]);
  const [search, setSearch] = React.useState('')
  const addTodo=(todo)=>{setTodos([...todos, todo])}

  const deleteItem=(id)=>{
    var filtered = todos.filter(todo => todo.id !== id)
    setTodos(filtered)
  }

  const editTodo=(id, newText)=>{
    var ArrayItens = [...todos]
    ArrayItens.splice(id, 1, {texts: newText, id: id})
    setTodos(ArrayItens)
  }

  const searchFilter = todos.filter((item)=>item.texts.toLowerCase().startsWith(search.toLowerCase()))

  return (
    <S.All>
        <S.Container>
            <Paper id='HeaderArea'>
                <S.InputArea>
                    <TextField autoComplete='off' margin='dense' type='search' onChange={(e)=>setSearch(e.target.value)} fullWidth id="outlined-basic" label="Pesquisar por tarefa" variant="outlined" />
                </S.InputArea>
                <Form addTodo={addTodo}/>                
            </Paper>
            <List  sx={{ borderRadius: '5px'}}>
                {searchFilter.map( (todo, key) => (
                <S.Item key={key} >
                    <TodoItem editTodo={editTodo} deleteItem={deleteItem} todo={todo}/>
                </S.Item>))}
            </List>
        </S.Container>
    </S.All>
  )
}