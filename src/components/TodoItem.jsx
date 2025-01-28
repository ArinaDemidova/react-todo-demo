import { FaTimes, FaPen } from "react-icons/fa";

const todoItem = ({todo, index, onOpenDeleteModal, onOpenUpdateModal}) => {

    const onDeleteButtonClick = () => {
        onOpenDeleteModal(index);
    }

    const onUpdateButtonClick = () => {
        onOpenUpdateModal(index);
    }

    return (
        <li className="bg-white rounded p-5 mb-4 flex justify-between items-center">
            <span className={'overflow-ellipsis pr-10'}>{todo.text}</span>
            <div className="flex justify-between items-center gap-2">
                <button
                    id={'deleteTodoButton'}
                    type={'button'}
                    className={'bg-red-500 rounded text-white p-2 cursor-pointer flex justify-center items-center'}
                    onClick={onDeleteButtonClick}
                >
                    <FaTimes />
                </button>
                <button
                    id={'updateTodoButton'}
                    type={'button'}
                    className={'bg-blue-500 rounded text-white p-2 cursor-pointer flex justify-center items-center'}
                    onClick={onUpdateButtonClick}
                >
                    <FaPen />
                </button>
            </div>
        </li>
    )
}

export default todoItem;