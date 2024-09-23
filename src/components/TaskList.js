import { useTodos } from '../context/TodoContext';
import Image from 'next/image';
import trashCan from '../assets/img/trash.png';
import Link from 'next/link';

export default function TaskList() {
    const { todos, completedTodos, handleToggle, setShowConfirm, setConfirmDeleteId } = useTodos();

    return (
        <>
            <section className="toDoList">
                <h2>Suas tarefas de hoje</h2>
                {todos.length === 0 ? <p>Nenhuma tarefa para hoje.</p> : todos.map(todo => (
                    <article className="cardTask" key={todo.id}>
                        <div>
                            <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
                            <span>{todo.text}</span>
                        </div>
                        <button onClick={() => { setConfirmDeleteId(todo.id); setShowConfirm(true); }}>
                            <Image src={trashCan} alt='Lixeira' />
                        </button>
                    </article>
                ))}
                {completedTodos.length > 0 && (
                    <section className="taskCompleted">
                        <h2>Tarefas Finalizadas</h2>
                        {completedTodos.map(todo => (
                            <article className='cardTask' key={todo.id}>
                                <div>
                                    <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
                                    <span className='listCompleted'>{todo.text}</span>
                                </div>
                                <button onClick={() => { setConfirmDeleteId(todo.id); setShowConfirm(true); }}>
                                    <Image src={trashCan} alt='Lixeira' />
                                </button>
                            </article>
                        ))}
                    </section>
                )}
            </section>
            <section className="containerButton">
                <Link href="/add-task">
                    <button className="newTaskBtn">Adicionar Nova Tarefa</button>
                </Link>
            </section>
        </>
    );
}