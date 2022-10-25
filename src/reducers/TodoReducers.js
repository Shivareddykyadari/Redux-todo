import { bindActionCreators } from "redux";

const init={
    todos:[]
}
export const TodoReducer=(state=init,action)=>{
    // const {type,payload}=action
    // console.log(action)
    switch(action.type){
        case "ADD_TODO":
            console.log("before",state.todos)
            return {todos:[...state.todos,action.payload]};
        case "REMOVE TODO":
            console.log("remo",action.type,action.payload)
            let data=state.todos.filter((ele)=>{
                return ele!==action.payload;
            })
            return {todos:[...data]}
        default:return state
    }

}