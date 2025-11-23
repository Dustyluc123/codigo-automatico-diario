import React from 'react';
import './style.css';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Cabeçalho</h1>
      </header>
      <main className="app-main">
        <p>Conteúdo Principal</p>
      </main>
      <footer className="app-footer">
        <p>Rodapé</p>
      </footer>
    </div>
  );
};

export default App;
