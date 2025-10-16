import React from 'react';
import Bienvenue from './exercices/Ex1_Bienvenue/Bienvenue';
import Compteur from './exercices/Ex2_Compteur/Compteur';
import Formulaire from './exercices/Ex3_Formulaire/Formulaire';
import ListeCourses from './exercices/Ex4_ListeCourses/ListeCourses';

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
