const modalDelete = ({onClose, onConfirm}) => {
    return (
        <>
            <div>
                <p className="mb-4">Вы уверены, что хотите удалить эту задачу?</p>
                <div className="flex justify-end gap-4">
                    <button
                        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                        onClick={onClose}
                    >Отмена</button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={onConfirm}
                    >Удалить</button>
                </div>
            </div>
        </>
    )
}

export default modalDelete;