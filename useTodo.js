import { useEffect, useReducer } from "react";
import { TodoList  } from "../08-useReducer/TodoList";
import { todoReducer } from "../08-useReducer/TodoReducer";

export const useTodo = () => {

     const init = () => {
        return JSON.parse( localStorage.getItem('todos')) || [];
    }

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ))
    
      
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        
        dispatch( action );
    }
    
    const handleDeleteTodo = ( id ) => {
        dispatch  ({
            type: '[TODO] Remove Todo',
            payload: id,
        });
        
       
    }

    const handleToggleTodo = ( id ) => {
        dispatch ({
            type: '[TODO] Toggle Todo',
            payload: id,
        })
        
        
    }

    const todosCount = todos.length

    const pendingCount = todos.filter(todo => !todo.done).length
    
  return {

    
    todos,
    todosCount,
    pendingCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo


  }
}
