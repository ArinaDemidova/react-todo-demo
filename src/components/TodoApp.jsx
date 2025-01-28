import { FaPlus } from "react-icons/fa6";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/actions.js";
import TodoList from "./TodoList.jsx";

const TodoApp = () => {
    const dispatch = useDispatch();
    const [newTodoText, setNewTodoText] = useState ('');

    const onAddTodoButtonClick = () => {
        let toDo = newTodoText.trim();

        if (toDo === '')
        {
            return;
        }

        dispatch(addTodo(toDo));

        setNewTodoText('');
    }

    return (
        <div className={'p-5 rounded bg-blue-50 max-w-full min-h-screen'}>
            <h1 className={'font-bold text-center mt-10 mb-10 text-2xl uppercase'}>Список задач</h1>
            <div className={'w-full m-auto md:w-1/2'}>
                <div className={'flex flex-col md:flex-row align-middle justify-between gap-5 md:gap-10 mb-15'}>
                    <input
                        value={newTodoText}
                        id={'addTodoInput'}
                        name={'newTodo'}
                        type={'text'}
                        className={'bg-white rounded pl-8 pr-8 pt-4 pb-4 outline-0 flex-grow'}
                        placeholder={'Новая задача'}
                        onChange={(e) => setNewTodoText(e.target.value)}
                    />
                    <button
                        id={'addTodoButton'}
                        type={'button'}
                        className={'bg-blue-500 rounded text-white w-full h-12 md:h-auto md:w-16 cursor-pointer text-2xl flex justify-center items-center'}
                        onClick={onAddTodoButtonClick}
                    >
                        <FaPlus />
                    </button>
                </div>
                <TodoList />
            </div>
        </div>
    )
}

export default TodoApp;