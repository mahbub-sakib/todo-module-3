import React, { useState } from 'react';
import TodoCard from './TodoCard';
import { Button } from '../ui/button';
import AddTodoModal from './AddTodoModal';
import TodoFilter from './TodoFilter';
import { useAppSelector } from '@/redux/hook';
import { useGetTodosQuery } from '@/redux/api/api';

const TodoContainer = () => {
    const [priority, setPriority] = useState("")
    // from local state
    // const { todos } = useAppSelector((state) => state.todos)

    // from server state
    const { data: todos, isLoading, isError } = useGetTodosQuery(priority);

    // console.log(todos);
    if (isLoading) {
        return <p>Loading .....</p>
    }

    return (
        <div>
            <div className='flex justify-between mb-5'>


                <AddTodoModal></AddTodoModal>
                <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
            </div>
            <div className='primary-gradient w-full h-full rounded-xl p-[5px]'>
                <div className='bg-[#FFFFFF] p-5 w-full h-full rounded-lg space-y-3'>
                    {/* <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard> */}
                    {todos.map((item) => (<TodoCard {...item} ></TodoCard>))}
                </div>

                {/* <div className='bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md'>
                    <p>There is no task pending.</p>
                </div> */}
            </div>
        </div>
    );
};

export default TodoContainer;