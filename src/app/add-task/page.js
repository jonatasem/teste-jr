"use client";

import { useState } from 'react';
import { useTodos } from '../../context/TodoContext';
import { useRouter } from 'next/navigation';

export default function AddTask() {
    const { addTodo } = useTodos();
    const [newTodo, setNewTodo] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo('');
        router.push('/'); // Redireciona para a página principal após adicionar
    };

    return (
        <article className="formNewTask">
            <form className="newTaskAdd" onSubmit={handleSubmit}>
                <h2>Nova tarefa</h2>
                <label>Título</label>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Digite"
                    required
                />
                <div className='containerBtnTask'>
                    <button className='btnCancel' type="button" onClick={() => {
                        setNewTodo(''); 
                        router.push('/'); // Redireciona para a página principal
                    }}>Cancelar</button>
                    <button className='btnAdd' type="submit">Adicionar</button>
                </div>
            </form>
        </article>
    );
}