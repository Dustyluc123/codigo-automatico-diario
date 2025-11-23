import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Componentes de Placeholder para as Páginas
const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>Bem-vindo à página inicial da aplicação!</p>
  </div>
);

const AboutPage = () => (
  <div>
    <h1>About Page</h1>
    <p>Informações sobre a nossa empresa/aplicação.</p>
  </div>
);

const ContactPage = () => (
  <div>
    <h1>Contact Page</h1>
    <p>Entre em contato conosco!</p>
  </div>
);

// Componente de Cabeçalho
const Header = () => (
  <header style={{
    padding: '1rem',
    background: '#333',
    color: 'white',
    borderBottom: '1px solid #444',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }}>
    <h2 style={{ margin: 0 }}>My App</h2>
    <nav>
      <Link to="/" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>About</Link>
      <Link to="/contact" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Contact</Link>
    </nav>
  </header>
);

// Componente de Rodapé
const Footer = () => (
  <footer style={{
    padding: '1rem',
    background: '#333',
    color: 'white',
    borderTop: '1px solid #444',
    textAlign: 'center',
    marginTop: 'auto'
  }}>
    <p>&copy; 2023 My Full Stack App</p>
  </footer>
);

// Componente de Layout que envolve o conteúdo da rota
const Layout = ({ children }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }}>
    <Header />
    <main style={{
      flexGrow: 1,
      padding: '2rem',
      backgroundColor: '#f9f9f9'
    }}>
      {children}
    </main>
    <Footer />
  </div>
);

// Componente principal da aplicação
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Exemplo de rota para 404 - Opcional */}
          {/* <Route path="*" element={<div><h1>404 - Not Found</h1></div>} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
