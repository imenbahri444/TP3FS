import React from 'react';
import Bienvenue from "./exercices/ex1/bienvenue";
import Compteur from "./exercices/ex2/compteur";
import Formulaire from "./exercices/ex3/formulaire";
import ListeCourses from "./exercices/ex4/listeCourses";

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>TP3 React – Concepts de base</h1>

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
    </div>
  );
}

export default App;
