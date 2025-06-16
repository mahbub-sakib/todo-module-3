import React from 'react';
import TodoCard from './TodoCard';

const TodoContainer = () => {
    return (
        <div>
            <div>
                <button>Add todo</button>
                <button>Filter</button>
            </div>
            <div className='bg-blue-300 w-full h-full rounded-xl p-5 space-y-3'>
                <TodoCard></TodoCard>
                <TodoCard></TodoCard>
                <TodoCard></TodoCard>
                <div className='bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md'>
                    <p>There is no task pending.</p>
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;