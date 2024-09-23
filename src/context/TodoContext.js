"use client"; 

import { createContext, useContext, useEffect, useState } from 'react';

const TodoContext = createContext();

export const useTodos = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodos deve ser usado dentro de um TodoProvider");
    }
    return context;
};

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
    const [showConfirm, setShowConfirm] = useState(false);
    const [confirmDeleteId, setConfirmDeleteId] = useState(null);

    // Carregar tarefas do localStorage
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        const storedCompletedTodos = JSON.parse(localStorage.getItem('completedTodos')) || [];
        setTodos(storedTodos);
        setCompletedTodos(storedCompletedTodos);
    }, []);

    // Salvar tarefas no localStorage quando os estados mudarem
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
    }, [todos, completedTodos]);

    const addTodo = (newTodo) => {
        if (!newTodo.trim()) return alert("A tarefa não pode estar vazia!");
        if (todos.some(todo => todo.text.toLowerCase() === newTodo.toLowerCase())) {
            return alert("Essa tarefa já existe!");
        }

        const newTask = { id: Date.now(), text: newTodo.trim(), completed: false };
        setTodos(prev => [...prev, newTask]);
    };

    const handleToggle = (id) => {
        const todo = todos.find(t => t.id === id);
        if (todo) {
            if (todo.completed) {
                setCompletedTodos(prev => prev.filter(t => t.id !== id));
                setTodos(prev => [...prev, { ...todo, completed: false }]);
            } else {
                setTodos(prev => prev.filter(t => t.id !== id));
                setCompletedTodos(prev => [...prev, { ...todo, completed: true }]);
            }
        }
    };

    const handleDelete = (id) => {
        const isCompleted = completedTodos.some(todo => todo.id === id);
        if (isCompleted) {
            setCompletedTodos(prev => prev.filter(todo => todo.id !== id));
        } else {
            setTodos(prev => prev.filter(todo => todo.id !== id));
        }
        setShowConfirm(false);
        setConfirmDeleteId(null);
    };

    return (
        <TodoContext.Provider value={{ 
            todos, 
            completedTodos, 
            addTodo, 
            handleToggle, 
            handleDelete, 
            showConfirm, 
            setShowConfirm, 
            confirmDeleteId, 
            setConfirmDeleteId 
        }}>
            {children}
        </TodoContext.Provider>
    );
};