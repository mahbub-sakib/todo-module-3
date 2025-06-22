import React, { FormEvent, useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { addTodo } from '@/redux/features/todoSlice';

const AddTodoModal = () => {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useAppDispatch();


    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        const randomString = Math.random().toString(36).substring(2, 7);

        console.log(task, description);

        const taskdetails = {
            id: randomString,
            title: task,
            description: description
        }
        dispatch(addTodo(taskdetails))
    }

    return (
        <Dialog>

            <DialogTrigger asChild>
                <Button className='primary-gradient text-xl font-semibold'>Add todo</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={onSubmit}>
                    <DialogHeader>
                        <DialogTitle>Add Task</DialogTitle>
                        <DialogDescription>
                            Add your task that you want to finish.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="task">Task</Label>
                            <Input onBlur={(e) => setTask(e.target.value)} id="task" name="name" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="description">Description</Label>
                            <Input onBlur={(e) => setDescription(e.target.value)} id="description" name="username" />
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                    </div>
                </form>
            </DialogContent>

        </Dialog >
    );
};

export default AddTodoModal;