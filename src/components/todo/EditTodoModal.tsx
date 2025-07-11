import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hook";
import { editTodo } from '@/redux/features/todoSlice';

type EditTodoModalProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    todo: {
        id: string;
        title: string;
        description: string;

    };
};

export const EditTodoModal = ({ open, onOpenChange, todo }: EditTodoModalProps) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        dispatch(editTodo({ id: todo.id, title, description }));
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Todo</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <Input
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        value={title}
                        required
                    />
                    <Input
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <div className="flex justify-end gap-2">
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit">Save</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};