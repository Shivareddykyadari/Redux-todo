import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodo } from './actions/TodoActions';
import './App.css';
import { store } from './store';

function App() {
  const [todo,setTodo]=useState();

  const Todo=useSelector((state)=>state.Todo);
  // console.log("1",Todo);
  const {todos}=Todo;
  
  const dispatch=useDispatch();

  

const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(AddTodoAction(todo))
  // setTodo("")
};
const removeHandler=(t)=>{
    dispatch( RemoveTodo(t))
}


  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo-List-App-Redux</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder='enter a Todo' style={{
            width:350,
            padding:10,
            borderRadius:20,
            border:'none',
            fontSize:20,
          }} onChange={(e)=>setTodo(e.target.value)}/>
          <button type='submit'style={{
            padding:7,
            borderRadius:25,
            fontSize:25,
            marginLeft:20
          }}>Go</button>
        </form >
        <ul className='allTodos'>
          {
            todos && todos.map((t,i)=>(
              <li key={Math.round(Math.random()*1234)} className='singleTodo'>
            <span className='TodoText'>{t}</span>
            <button style={{
              borderRadius:25,
              padding:10,
              border:'2px solid white',
              color:'white',
              backgroundColor:"orangered"

            }} onClick={()=>removeHandler(t,i)}>Delete</button>
          </li>
            ))
          }
          
        </ul>
      </header>
    </div>
  );
}

export default App;
