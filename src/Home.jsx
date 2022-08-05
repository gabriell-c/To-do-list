import Form from './components/Form';
import TodoItem from './components/List';
import * as S from './components/Style';
import { List } from '@mui/material'
import * as React from 'react'

export default function Home() {

  const [todos, setTodos] = React.useState([]);

  const addTodo=(todo)=>{
    setTodos([...todos, todo])
  }

  const deleteItem=(id)=>{
    var filtered = todos.filter(todo => todo.id !== id)
    setTodos(filtered)
  }

  const editTodo=(id, newText)=>{
    var ArrayItens = [...todos]
    ArrayItens.splice(id, 1, {texts: newText, id: id})
    setTodos(ArrayItens)
  }

  return (
    <S.All>
        <S.Container>
            <Form addTodo={addTodo}/>
            <List  sx={{ borderRadius: '5px'}}>
                {todos.map( (todo, key) => (
                <div key={key} style={{marginTop: '1em', boxShadow: '1px 1px 3px #11111180'}}>
                    <TodoItem editTodo={editTodo} deleteItem={deleteItem} todo={todo}/>
                </div>))}
            </List>
        </S.Container>
    </S.All>
  )
}