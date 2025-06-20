import React from 'react';
import TodoCard from './TodoCard';
import { Button } from '../ui/button';
import AddTodoModal from './AddTodoModal';
import TodoFilter from './TodoFilter';

const TodoContainer = () => {
    return (
        <div>
            <div className='flex justify-between mb-5'>


                <AddTodoModal></AddTodoModal>
                <TodoFilter></TodoFilter>
            </div>
            <div className='primary-gradient w-full h-full rounded-xl p-[5px]'>
                <div className='bg-[#FFFFFF] p-5 w-full h-full rounded-lg space-y-3'>
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                </div>

                {/* <div className='bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md'>
                    <p>There is no task pending.</p>
                </div> */}
            </div>
        </div>
    );
};

export default TodoContainer;