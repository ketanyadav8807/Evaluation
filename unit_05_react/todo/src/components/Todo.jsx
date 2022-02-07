import React, { useState } from 'react';
import styles from "./todo.module.css";

export const Todo = ({todo , onDeleteItem}) => {
    const [isStricked , setIsStricked] = useState(false);
  return (
      <li className={styles.todoItem}>
          <input type="checkbox" onChange={ ()=> {
              setIsStricked(!isStricked);
          }}/>
          <span className={isStricked ? styles.strike : styles.normal}>
              {todo.value}
          </span>
          <button onClick={()=> onDeleteItem(todo)}>Delete</button>
      </li> 
  );
};
