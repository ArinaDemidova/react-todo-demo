
const modalUpdate = ({onClose, onConfirm, onChange, updateTodoText}) => {
    return (
        <>
            <div>
                <p className="mb-4">Изменить задачу:</p>
                <input
                    value={updateTodoText}
                    name={'updateTodo'}
                    type={'text'}
                    className={'w-full bg-white rounded pl-4 pr-4 pt-4 pb-4 outline-0 flex-grow border-b-4 border-blue-500 mb-10'}
                    placeholder={'Переименовать задачу'}
                    onChange={onChange}
                />
                <div className="flex justify-end gap-4">
                    <button
                        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                        onClick={onClose}
                    >Отмена</button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={onConfirm}
                    >Изменить</button>
                </div>
            </div>
        </>
    )
}

export default modalUpdate;