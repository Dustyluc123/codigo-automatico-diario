import React from 'react';

/**
 * Componente funcional Home para a página inicial da loja.
 * Exibe uma mensagem de boas-vindas e uma introdução.
 */
const Home = () => {
  return (
    <div className="home-page-container">
      <h1>Bem-vindo à Nossa Loja</h1>
      <p>
        Descubra nossa incrível seleção de produtos frescos e inovadores, 
        cuidadosamente escolhidos para atender às suas necessidades e elevar sua experiência de compra.
        Estamos felizes em tê-lo aqui!
      </p>
      {/* Futuramente, podemos adicionar mais conteúdo como produtos em destaque, 
          chamadas para ação ou um carrossel de imagens. */}
    </div>
  );
};

export default Home;
