import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello",completed:false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo) //todos from intialstae
    },

    // updateTodo : (state,action) =>{
    // const updateTodo = (id,todo) =>{
    // setTodos((prev) => prev.map((singleTodo)=>singleTodo.id === id ? todo:prev))
    
    // state.todos.text = state.todos.text((prev) => prev.map((singleTodo)=> singleTodo.id === id ? todo.payload))

    //         // prev.map((eachVal=>{
    //         //   if(eachVal.id === id){
    //         //     todo
    //         //   }
    //         //   else{
    //         //     prevTodo
    //         //   }
    //         // }))
    //       }
    // },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// create reducer functionalty for exporting
export const {addTodo,removeTodo} =todoSlice.actions

//to us in components individualyy reducers
const todoReducer = todoSlice.reducer

export default todoReducer
