import { useState } from "react"

const TodoInput = ({ addTodo }) => {

    const [title, setTitle] = useState('');

    const handleAddTodo = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            if(title !== ''){
                addTodo(title);
                setTitle('');
            }
        }
    }

    return (
        <div className="mt-6 relative" data-testid="todo-input">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
            </div>
            <input
                className="focus:shadow-lg font-Inter focus:shadow-blue-800 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => handleAddTodo(e)}
                placeholder="Escribe aquí tu tarea"
                data-testid="add-todo-button"
            />
        </div>
    )
}

export { TodoInput }