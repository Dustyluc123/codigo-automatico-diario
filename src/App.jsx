import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota pai que utiliza o componente Layout como seu elemento principal */}
        <Route path="/" element={<Layout />}>
          {/* Rotas filhas que serão renderizadas dentro do <Outlet /> do Layout */}
          <Route index element={<div>Página Home</div>} /> {/* Rota para '/' */}
          <Route path="produtos" element={<div>Página Produtos</div>} /> {/* Rota para '/produtos' */}
          <Route path="carrinho" element={<div>Página Carrinho</div>} /> {/* Rota para '/carrinho' */}
          
          {/* Opcional: Uma rota de "catch-all" para páginas não encontradas */}
          <Route path="*" element={<div>404 - Página Não Encontrada</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
