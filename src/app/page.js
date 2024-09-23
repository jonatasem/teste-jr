"use client"; 

import Header from '../components/Header';
import TaskList from '../components/TaskList';
import ConfirmDelete from '../app/confirm-delete/page';
import { useTodos } from '../context/TodoContext';

export default function Home() {
    const { showConfirm } = useTodos();

    return (
        <>
            <Header />
            <main className="container-main">
                <TaskList />
                {showConfirm && <ConfirmDelete />} {/* Renderiza o componente de confirmação */}
            </main>
        </>
    );
}