// js/main.js

// Importa o array de produtos mock do arquivo de dados
import { products } from './data/products.js';

// Verifica se o script está sendo carregado corretamente
console.log('Vite: Script js/main.js carregado com sucesso!');

// Encontra o elemento com o ID 'app-root'
const appRootElement = document.getElementById('app-root');

/**
 * Renderiza os produtos dinamicamente no DOM.
 * Esta função itera sobre um array de produtos, cria elementos HTML para cada um
 * (exibindo nome, preço e imagem) e os injeta no elemento alvo especificado.
 * @param {Array<Object>} productsArray - O array de objetos de produtos a serem renderizados.
 * @param {HTMLElement} targetElement - O elemento HTML onde os produtos serão injetados.
 */
function renderProducts(productsArray, targetElement) {
  if (!targetElement) {
    console.warn('Vite: Elemento alvo para renderização de produtos não encontrado.');
    return;
  }

  // Limpa o conteúdo existente do elemento alvo, substituindo qualquer placeholder.
  targetElement.innerHTML = '';

  // Cria um container para os produtos. Isso ajuda na organização e estilização (ex: grid, flexbox).
  const productsContainer = document.createElement('div');
  productsContainer.classList.add('products-container'); // Adiciona uma classe para estilização via CSS

  productsArray.forEach(product => {
    // Cria um elemento <article> ou <div> para cada produto
    const productCard = document.createElement('article');
    productCard.classList.add('product-card'); // Adiciona uma classe para estilização via CSS
    // Adiciona um atributo de dados para fácil referência ao ID do produto, útil para interatividade futura.
    productCard.setAttribute('data-product-id', product.id);

    // Cria e configura a imagem do produto
    const productImage = document.createElement('img');
    productImage.src = product.image; // Assume que `product.image` contém a URL da imagem
    productImage.alt = product.name; // Usar o nome do produto como texto alternativo para acessibilidade
    productImage.classList.add('product-image');

    // Cria e configura o nome do produto
    const productName = document.createElement('h3');
    productName.textContent = product.name;
    productName.classList.add('product-name');

    // Cria e configura o preço do produto
    const productPrice = document.createElement('p');
    // Formata o preço para duas casas decimais, se for um número, ou exibe como está.
    productPrice.textContent = `R$ ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}`;
    productPrice.classList.add('product-price');

    // Cria o botão 'Adicionar ao Carrinho'
    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Adicionar ao Carrinho';
    addToCartBtn.classList.add('add-to-cart-btn'); // Adiciona a classe CSS especificada

    // Adiciona um event listener para o clique do botão
    addToCartBtn.addEventListener('click', () => {
      console.log(`Produto adicionado ao carrinho: ${product.name} (ID: ${product.id})`);
    });

    // Anexa os elementos de informação ao card do produto
    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(addToCartBtn); // Anexa o botão ao card do produto

    // Anexa o card do produto ao container principal de produtos
    productsContainer.appendChild(productCard);
  });

  // Anexa o container de produtos (com todos os cards) ao elemento alvo no DOM
  targetElement.appendChild(productsContainer);
  console.log('Vite: Produtos renderizados com sucesso no elemento #app-root.');
}

// Modifica o conteúdo do elemento 'app-root' se ele existir
if (appRootElement) {
  // Remove o conteúdo de placeholder existente e os estilos aplicados.
  // Em vez disso, chama a nova função para renderizar os produtos dinamicamente.
  renderProducts(products, appRootElement);
} else {
  console.warn('Vite: Elemento com ID "app-root" não encontrado. Verifique se o HTML possui um <div id="app-root">.');
}
