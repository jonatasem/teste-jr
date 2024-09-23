"use client";

import { useTodos } from '../../context/TodoContext';

export default function ConfirmDelete() {
    const { confirmDeleteId, handleDelete, setShowConfirm } = useTodos();

    const handleConfirmDelete = () => {
        handleDelete(confirmDeleteId);
        setShowConfirm(false);
    };

    return (
        <section className="confirmDeletePanel">
            <article className='deleteConfig'>
                <h2>Deletar tarefa</h2>
                <p>Tem certeza que você deseja deletar essa tarefa?</p>
                <div className='confirmButtons'>
                    <button className='btnCancel' onClick={handleConfirmDelete}>Confirmar</button>
                    <button className='btnDelete' onClick={() => setShowConfirm(false)}>Cancelar</button>
                </div>
            </article>
        </section>
    );
}