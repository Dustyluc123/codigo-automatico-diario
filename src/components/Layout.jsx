import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>Minha Loja Online</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/carrinho">Carrinho</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="app-content">
        <Outlet />
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Minha Loja Online. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;
