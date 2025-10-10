import { useState } from 'react';

export default function TodoList() {
  // State to store array of todo items
  const [todos, setTodos] = useState([]);
  // State to store the current input value
  const [input, setInput] = useState('');

  // Function to add a new todo item
  const addTodo = () => {
    // Check if input has text (after removing whitespace)
    if (input.trim()) {
      // Add new todo object to the todos array
      setTodos([...todos, { id: Date.now(), text: input, done: false }]);
      // Clear the input field
      setInput('');
    }
  };

  // Function to toggle the completion status of a todo
  const toggleTodo = (id) => {
    // Map through todos and flip the 'done' status for matching id
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  // Function to delete a todo item
  const deleteTodo = (id) => {
    // Filter out the todo with matching id
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to handle Enter key press in input field
  const handleKeyPress = (e) => {
    // If Enter key is pressed, add the todo
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <>
      {/* Internal CSS styles */}
      <style>{`
        /* Reset default margins and padding */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Style the main container background */
        .app-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        /* White card that holds the todo list */
        .todo-card {
          background: white;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          padding: 30px;
          max-width: 500px;
          width: 100%;
        }

        /* Main title styling */
        .title {
          color: #333;
          font-size: 32px;
          margin-bottom: 25px;
          text-align: center;
          font-weight: bold;
        }

        /* Container for input and button */
        .input-section {
          display: flex;
          gap: 10px;
          margin-bottom: 25px;
        }

        /* Text input field styling */
        .todo-input {
          flex: 1;
          padding: 12px 15px;
          border: 2px solid #ddd;
          border-radius: 5px;
          font-size: 16px;
          outline: none;
          transition: border-color 0.3s;
        }

        /* Change border color when input is focused */
        .todo-input:focus {
          border-color: #667eea;
        }

        /* Add button styling */
        .add-button {
          background: #667eea;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          transition: background 0.3s;
        }

        /* Darken button on hover */
        .add-button:hover {
          background: #5568d3;
        }

        /* Container for all todo items */
        .todo-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* Individual todo item styling */
        .todo-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 5px;
          transition: background 0.3s;
        }

        /* Change background when hovering over todo item */
        .todo-item:hover {
          background: #e9ecef;
        }

        /* Checkbox styling */
        .todo-checkbox {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }

        /* Todo text styling */
        .todo-text {
          flex: 1;
          color: #333;
          font-size: 16px;
        }

        /* Strike through completed todo items */
        .todo-text.completed {
          text-decoration: line-through;
          color: #999;
        }

        /* Delete button styling */
        .delete-button {
          background: #dc3545;
          color: white;
          border: none;
          padding: 8px 15px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
          transition: background 0.3s;
        }

        /* Darken delete button on hover */
        .delete-button:hover {
          background: #c82333;
        }

        /* Empty state message when no todos exist */
        .empty-state {
          text-align: center;
          color: #999;
          padding: 40px 20px;
          font-size: 16px;
        }

        /* Task counter at the bottom */
        .task-counter {
          text-align: center;
          color: #666;
          font-size: 14px;
          margin-top: 20px;
        }
      `}</style>

      {/* Main app container */}
      <div className="app-container">
        {/* White card containing the todo list */}
        <div className="todo-card">
          {/* Title */}
          <h1 className="title">My Todo List</h1>
          
          {/* Input section */}
          <div className="input-section">
            {/* Text input field */}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add a new task..."
              className="todo-input"
            />
            {/* Add button */}
            <button onClick={addTodo} className="add-button">
              Add
            </button>
          </div>

          {/* Todo items list */}
          <div className="todo-list">
            {/* Show empty state if no todos exist */}
            {todos.length === 0 ? (
              <div className="empty-state">No tasks yet. Add one above!</div>
            ) : (
              // Map through todos and display each item
              todos.map(todo => (
                <div key={todo.id} className="todo-item">
                  {/* Checkbox to mark todo as complete */}
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(todo.id)}
                    className="todo-checkbox"
                  />
                  {/* Todo text with conditional completed class */}
                  <span className={`todo-text ${todo.done ? 'completed' : ''}`}>
                    {todo.text}
                  </span>
                  {/* Delete button */}
                  <button onClick={() => deleteTodo(todo.id)} className="delete-button">
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Task counter - only show if todos exist */}
          {todos.length > 0 && (
            <div className="task-counter">
              {/* Count remaining incomplete tasks */}
              {todos.filter(t => !t.done).length} of {todos.length} tasks remaining
            </div>
          )}
        </div>
      </div>
    </>
  );
}