import {useDispatch, useSelector} from "react-redux";
import TodoItem from "./TodoItem.jsx";
import {deleteTodo, updateTodo} from "../redux/actions.js";
import {useState} from "react";
import ModalDelete from "./ModalDelete.jsx";
import ModalUpdate from "./ModalUpdate.jsx";

const todoList = () => {

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);


    const [modalType, setModalType] = useState (null);
    const [isModalOpen, setIsModalOpen] = useState (false);
    const [currentTodoIndex, setCurrentTodoIndex] = useState(null);
    const [updateTodoText, setUpdateTodoText] = useState ('');

    const openDeleteModal = (index) => {
        setCurrentTodoIndex(index);
        setModalType('delete');
        setIsModalOpen(true);
    };

    const closeDeleteModal = () => {
        setCurrentTodoIndex(null);
        setModalType(null);
        setIsModalOpen(false);
    };

    const confirmDeleteModal = () => {
        if (currentTodoIndex !== null) {
            dispatch(deleteTodo(currentTodoIndex));
            closeDeleteModal();
        }
    };

    const openUpdateModal = (index) => {
        setCurrentTodoIndex(index);
        setModalType('update');
        setIsModalOpen(true);
        setUpdateTodoText(todos[index].text);
    };

    const closeUpdateModal = () => {
        setCurrentTodoIndex(null);
        setModalType(null);
        setIsModalOpen(false);
    };

    const confirmUpdateModal = () => {
        if (currentTodoIndex !== null) {
            dispatch(updateTodo(currentTodoIndex, updateTodoText));
            closeUpdateModal();
        }
    };

    const changeUpdateTodoText = (e) => {
        setUpdateTodoText(e.target.value);
    }

    return (
        <>
            <ul>
                {
                    todos.map((todo, index) => (
                        <TodoItem
                            todo={todo}
                            index={index}
                            key={index}
                            onOpenDeleteModal={openDeleteModal}
                            onOpenUpdateModal={openUpdateModal}
                        />
                    ))
                }
            </ul>
            {
                isModalOpen
                &&
                <div className="fixed top-0 left-0 w-full h-screen z-20 flex justify-center items-center">
                    <div className="fixed top-0 left-0 w-full h-screen bg-black opacity-70 flex justify-center items-center"></div>
                    <div className="bg-white rounded-lg p-8 shadow-md z-21">
                        {
                            modalType === 'delete' && <ModalDelete onClose={closeDeleteModal} onConfirm={confirmDeleteModal}/>
                        }
                        {
                            modalType === 'update' && <ModalUpdate onClose={closeUpdateModal} onConfirm={confirmUpdateModal} onChange={changeUpdateTodoText} updateTodoText={updateTodoText}/>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default todoList;