import React , {useState} from 'react';
import {Todo} from "./Todo";
import {TodoInput} from "./TodoInput";

export const Todos = () => {
    const [todos , setTodos] = useState([]);
    const onDeleteItem = (itemToDelete) =>{
        const newTodoList = todos.filter(todo => todo.id !== itemToDelete.id);
        setTodos(newTodoList)
    }
  return (
  <div>
      <TodoInput todos={todos} setTodos={setTodos} />
      <div>
      <ul>
          {todos.map( (todo) =>(
              <Todo key={todo.id} todo={todo} onDeleteItem={onDeleteItem}/>
          ))}
      </ul>
    </div>
  </div>
  
  );
};
