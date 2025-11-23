// js/main.js

// Importa o array de produtos mock do arquivo de dados
import { products } from './data/products.js';
// Importa as funções de gerenciamento do carrinho
import { addToCart, getCartItems } from './cart.js';

// Verifica se o script está sendo carregado corretamente
console.log('Vite: Script js/main.js carregado com sucesso!');

// Encontra o elemento com o ID 'app-root'
const appRootElement = document.getElementById('app-root');

/**
 * Atualiza o contador de itens no carrinho exibido no DOM.
 * Obtém o elemento com ID 'cart-counter' e atualiza seu textContent
 * com o número total de itens retornados por `getCartItems()`.
 */
function updateCartCounter() {
  const cartCounterElement = document.getElementById('cart-counter');
  if (cartCounterElement) {
    const cartItems = getCartItems();
    cartCounterElement.textContent = cartItems.length.toString();
  } else {
    console.warn('Vite: Elemento com ID "cart-counter" não encontrado. Verifique se o HTML possui um elemento com este ID.');
  }
}

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
  const productsContainer = document.createElement('div'); // Correção aqui: document.createElement
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
      // 2. Chamar addToCart(product) passando o objeto product completo
      addToCart(product);
      // 3. Adicionar console.log para verificar a integração
      console.log(`Produto "${product.name}" adicionado ao carrinho.`);
      console.log('Conteúdo atual do carrinho:', getCartItems());
      // Atualiza o contador do carrinho após adicionar um item
      updateCartCounter();
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

// Inicializa o contador do carrinho quando a página é carregada
updateCartCounter();