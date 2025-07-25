import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
    id: string,
    title: string,
    description: string,
    isCompleted?: boolean
}

type TInitialState = {
    todos: TTodo[];
}

const initialState: TInitialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push({ ...action.payload, isCompleted: false })
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload)
        },
        toggleComplete: (state, action: PayloadAction<string>) => {
            const task = state.todos.find(item => item.id === action.payload);
            task!.isCompleted = !task?.isCompleted;
        },
        editTodo: (state, action: PayloadAction<{ id: string, title: string, description: string }>) => {
            const task = state.todos.find(item => item.id === action.payload.id);
            if (task) {
                task.title = action.payload.title;
                task.description = action.payload.description;
            }
        }
    }
})

export const { addTodo, removeTodo, toggleComplete, editTodo } = todoSlice.actions

export default todoSlice.reducer;