
export const AddTodoAction=(todo)=>( dispatch,getState)=>{
   const {
    Todo:{todos},
   }=getState()

   const hasTodo=todos.find((i)=>i.todo===todo);

   if(!hasTodo&& todo!==""){
    dispatch({
        type:"ADD_TODO",
        payload:todo,
    });
   }
}
export const RemoveTodo=(todo)=>{
    return {
        type:"REMOVE TODO",
        payload:todo
    }
}