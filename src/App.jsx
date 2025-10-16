import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Bienvenue from "./exercices/ex1/bienvenue";
import Compteur from "./exercices/ex2/compteur";
import Formulaire from "./exercices/ex3/formulaire";
import ListeCourses from "./exercices/ex4/listeCourses";
import TodoList from "./exercices/todo_list/TodoList";
import './index.css';

function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>TP3 React – Concepts de base</h1>
      
      <nav style={{ marginBottom: '30px', padding: '15px', background: '#f5f5f5', borderRadius: '8px' }}>
        <Link 
          to="/todo" 
          style={{ 
            padding: '10px 20px', 
            background: '#4CAF50', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '5px',
            fontWeight: 'bold'
          }}
        >
          📝 Voir seulement la Todo List
        </Link>
      </nav>

      <section>
        <h2>Exercice 1 : Bienvenue</h2>
        <Bienvenue nom="Alice" />
      </section>

      <section>
        <h2>Exercice 2 : Compteur</h2>
        <Compteur />
      </section>

      <section>
        <h2>Exercice 3 : Formulaire</h2>
        <Formulaire />
      </section>

      <section>
        <h2>Exercice 4 : Liste de courses</h2>
        <ListeCourses />
      </section>

      <section>
        <h2>Exercice 5 : Todo List</h2>
        <TodoList />
      </section>
    </div>
  );
}

function TodoPage() {
  return (
    <div style={{ 
      padding: '20px', 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
    }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link 
          to="/" 
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            padding: '10px 15px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '5px',
            display: 'inline-block'
          }}
        >
          ← Retour à tous les exercices
        </Link>
      </nav>
      
      <div style={{ 
        maxWidth: '600px', 
        margin: '0 auto',
        background: 'white',
        borderRadius: '15px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          color: '#FF6B6B', 
          marginBottom: '30px',
          fontSize: '2.5em'
        }}>
          📝 Todo List
        </h1>
        <TodoList />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </Router>
  );
}

export default App;