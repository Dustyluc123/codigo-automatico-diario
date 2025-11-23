

Tarefas a fazer:
- [ ] Exibir o número total de itens no carrinho em um indicador visual na interface:
    - Adicionar um elemento HTML (e.g., um ícone de carrinho com um contador) no `header` de `index.html`.
    - No `js/main.js`, criar uma função `updateCartCounter()` que use `getCartItems()` para obter o número de itens e atualize o texto desse elemento.
    - Chamar `updateCartCounter()` após cada `addToCart()` e também na inicialização da página.

Tarefas Feitas:
- [X] Crie o arquivo HTML principal que servirá como o ponto de entrada para o aplicativo E-Commerce. Ele deve incluir a estrutura básica do documento HTML5, um título apropriado para a página (ex: 'Meu E-Commerce'), e preparar links para os futuros arquivos CSS e JavaScript que serão criados.
  Detalhes:
  - Criação do arquivo `index.html` com a estrutura básica, meta tags, título, links para `css/style.css` e `js/main.js`, e seções `header`, `main` e `footer`.
- [X] Inicializar o projeto criando o arquivo `package.json`. Este arquivo será fundamental para gerenciar os metadados do projeto, scripts de execução e, principalmente, as dependências de desenvolvimento, como o Vite ou Webpack, que serão instaladas na próxima etapa para configurar o ambiente de desenvolvimento.
  Detalhes:
  - Criação do arquivo `package.json` com metadados básicos do projeto, tipo de módulo ES, e scripts placeholder para desenvolvimento, build e preview.
- [X] Configurar o ambiente de desenvolvimento instalando o Vite e atualizando os scripts do `package.json`.
  Detalhes:
  - Instalação do pacote `vite` como `devDependencies`.
  - Atualização dos scripts `dev`, `build` e `preview` no `package.json` para `vite`, `vite build` e `vite preview`, respectivamente.
  - O projeto está agora configurado para transpilação e empacotamento do JavaScript e CSS utilizando o Vite.
- [X] Criar o arquivo `css/style.css` no diretório `css/` e adicionar um estilo básico para o `body` (`background-color: #f0f0f0;`) para verificar se o Vite está processando corretamente o CSS e se o link no `index.html` está funcionando conforme esperado.
  Detalhes:
  - Criação do arquivo `css/style.css` com o conteúdo fornecido.
- [X] Criar o arquivo `js/main.js` e adicionar um `console.log` para verificar que o script está sendo carregado corretamente pelo Vite. Além disso, modificar o conteúdo do elemento com ID `app-root` para um texto indicando que o JavaScript foi inicializado, garantindo que a interação entre o HTML e o JS está funcionando.
  Detalhes:
  - Criação do arquivo `js/main.js` com um `console.log` e modificação do `textContent` do elemento `#app-root` para indicar a inicialização do JavaScript, incluindo estilos para visibilidade.
- [X] Crie um novo arquivo JavaScript para gerenciar dados de produtos mock. Este arquivo exportará um array de objetos, onde cada objeto representará um produto com propriedades básicas como `id`, `name`, `price`, `imageUrl` e `description`. Ele servirá como nossa fonte de dados temporária para que possamos começar a renderizar produtos na interface do usuário.
  Detalhes:
  - Criação do arquivo `js/data/products.js` que exporta um array de objetos de produtos mock.
- [X] Importar o array de produtos mock de `js/data/products.js` para `js/main.js`. Modificar o `js/main.js` para criar uma função que renderize os produtos dinamicamente. Esta função deve iterar sobre o array de produtos, criar elementos HTML (como uma 'div' ou 'article' para cada produto, exibindo o nome, preço e imagem), e então injetar esses elementos no DOM, especificamente dentro do elemento com o ID 'app-root'. O conteúdo de placeholder atual de `#app-root` deve ser substituído pela lista de produtos.
  Detalhes:
  - Modificação do arquivo `js/main.js` para importar `products` e incluir a função `renderProducts` que gera dinamicamente os cards dos produtos e os insere no DOM, substituindo o conteúdo inicial do `#app-root`.
- [X] Adicionar estilos CSS para os produtos. Configurar o container de produtos (`.products-container`) para usar um layout de grade responsivo (grid) com espaçamento. Estilizar cada card de produto (`.product-card`) com padding, margens, bordas sutis, um box-shadow leve para profundidade, e alinhar o texto ao centro. Também incluir estilos para a imagem do produto (`.product-image`), nome (`.product-name`) e preço (`.product-price`) para melhorar a apresentação visual e legibilidade.
  Detalhes:
  - Adição dos estilos fornecidos ao arquivo `css/style.css` para o container de produtos, cards individuais, imagens, nomes e preços, melhorando a apresentação visual.
- [X] Adicionar um botão "Adicionar ao Carrinho" a cada `product-card` no arquivo `js/main.js`. O botão deve ser funcional, exibindo um `console.log` ao ser clicado, indicando qual produto foi "adicionado" (usando o `product.name` ou `product.id`). Isso envolveu a modificação da função `renderProducts` para criar o botão e anexar um `event listener`.
  Detalhes:
  - Modificação da função `renderProducts` em `js/main.js` para criar e anexar um botão 'Adicionar ao Carrinho' a cada `product-card`, com um `event listener` que exibe um `console.log` com o produto adicionado.
- [X] Adicionar estilos CSS para o botão 'Adicionar ao Carrinho' (`.add-to-cart-btn`) no arquivo `css/style.css`. O botão deve ter um fundo azul (`#007bff`), texto branco (`color: white`), padding adequado (`padding: 10px 20px`), bordas arredondadas (`border-radius: 5px`), sem borda padrão (`border: none`), `font-size: 1em`, `font-weight: bold`, e um efeito visual ao passar o mouse (`:hover`) para indicar interatividade, como mudança de cor de fundo (`background-color: #0056b3`) e um leve `transform: translateY(-2px)` com uma `transition` suave para melhorar a experiência do usuário.
  Detalhes:
  - Adição dos estilos fornecidos para `.add-to-cart-btn` e `.add-to-cart-btn:hover` no arquivo `css/style.css`.
- [X] Criar um novo módulo JavaScript (`js/cart.js`) para gerenciar a lógica do carrinho de compras. Este módulo deve exportar funções como `addToCart(product)`, `getCartItems()`, e `removeFromCart(productId)`. Inicialmente, o carrinho pode ser um array vazio armazenado em memória.
  Detalhes:
  - Criação do arquivo `js/cart.js` que funcionará como o módulo de gerenciamento do carrinho de compras. Este módulo deve inicializar um array vazio para armazenar os itens do carrinho em memória. Ele precisa exportar três funções principais: `addToCart(product)` que adiciona um produto ao carrinho (por enquanto, apenas o objeto completo do produto), `getCartItems()` que retorna o array atual de itens no carrinho, e `removeFromCart(productId)` que remove um produto do carrinho com base no seu `productId`. O objetivo é encapsular toda a lógica do carrinho neste módulo, preparando-o para integração com a UI e persistência futura.
- [X] Integrar a funcionalidade de adicionar ao carrinho em `js/main.js`:
    - Importar as funções `addToCart` e `getCartItems` do módulo `js/cart.js` para `js/main.js`.
    - Modificar o `event listener` do botão "Adicionar ao Carrinho" (classe `.add-to-cart-btn`) em `js/main.js` para que, ao ser clicado, ele chame `addToCart(product)` (passando o objeto `product` completo).
    - Após a adição, adicione um `console.log` que exiba o nome do produto adicionado e o conteúdo atual do carrinho (utilizando `getCartItems()` de `js/cart.js`) para verificar a integração.

Lista de Todos os arquivos ja crido:
- `index.html`:
  ```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu E-Commerce</title>
    <!-- Link para o futuro arquivo CSS principal do aplicativo -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- O conteúdo principal do aplicativo E-Commerce será renderizado aqui -->
    <header>
        <nav>
            <!-- Navegação futura aqui -->
            <h1>Meu E-Commerce</h1>
        </nav>
    </header>

    <main id="app-root">
        <!-- Componentes e rotas do aplicativo serão carregados e montados aqui pelo JavaScript -->
        <p>Carregando E-Commerce...</p>
    </main>

    <footer>
        <p>&copy; 2023 Meu E-Commerce. Todos os direitos reservados.</p>
    </footer>

    <!-- Link para o futuro arquivo JavaScript principal do aplicativo -->
    <!-- O atributo 'defer' garante que o script seja executado após a análise completa do HTML -->
    <script src="js/main.js" defer></script>
</body>
</html>
  ```
- `package.json`:
  ```json
{
  "name": "my-fullstack-app",
  "version": "0.1.0",
  "description": "Um projeto full-stack inicializado para desenvolvimento moderno com suporte a módulos ES.",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "keywords": [
    "fullstack",
    "web",
    "javascript",
    "typescript",
    "modern-web"
  ],
  "author": "Seu Nome ou Empresa",
  "license": "MIT",
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
  ```
- `css/style.css`:
  ```css
body {
  background-color: #f0f0f0;
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

.products-container {
  display: grid;
  /* Responsive grid: auto-fit creates as many columns as fit, each min 250px, max 1fr */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px; /* Spacing between grid items */
  padding: 20px;
  max-width: 1200px; /* Max width for the container */
  margin: 20px auto; /* Center the container with vertical margins */
}

.product-card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0; /* Subtle border */
  border-radius: 8px; /* Slightly rounded corners */
  padding: 20px;
  text-align: center; /* Align text content to the center */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08); /* Light box-shadow for depth */
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.product-card:hover {
  transform: translateY(-5px); /* Lift effect on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.product-image {
  max-width: 100%; /* Ensure image fits within its container */
  height: 200px; /* Fixed height for consistent look */
  object-fit: contain; /* Ensure image content is fully visible and scaled */
  border-radius: 4px; /* Slight border-radius for the image */
  margin-bottom: 15px;
}

.product-name {
  font-size: 1.3em; /* Larger font for product name */
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
  line-height: 1.3;
}

.product-price {
  font-size: 1.15em; /* Prominent font size for price */
  color: #007bff; /* Distinct color for the price */
  font-weight: bold;
  margin-top: 15px;
}

.add-to-cart-btn {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer; /* Indica que é clicável */
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: 15px; /* Adiciona um espaço entre o preço e o botão */
}

.add-to-cart-btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}
  ```
- `js/main.js`:
  ```javascript
// js/main.js

// Importa o array de produtos mock do arquivo de dados
import products from './data/products.js'; // Corrigido para `import products from` para exportação padrão
// Importa as funções de gerenciamento do carrinho
import { addToCart, getCartItems } from './cart.js';

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
  const productsContainer = document.createElement('div'); // Correção: de document('div') para document.createElement('div')
  productsContainer.classList.add('products-container'); // Adiciona uma classe para estilização via CSS

  productsArray.forEach(product => {
    // Cria um elemento <article> ou <div> para cada produto
    const productCard = document.createElement('article');
    productCard.classList.add('product-card'); // Adiciona uma classe para estilização via CSS
    // Adiciona um atributo de dados para fácil referência ao ID do produto, útil para interatividade futura.
    productCard.setAttribute('data-product-id', product.id);

    // Cria e configura a imagem do produto
    const productImage = document.createElement('img');
    productImage.src = product.imageUrl; // Correção: de product.image para product.imageUrl para consistência com products.js
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
      const currentCartItems = getCartItems();
      console.log(`Produto "${product.name}" adicionado ao carrinho.`);
      console.log('Conteúdo atual do carrinho:', currentCartItems);
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
  ```
- `js/data/products.js`:
  ```javascript
const products = [
  {
    id: "prod_001",
    name: "Smartphone X",
    price: 799.99,
    imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Smartphone+X",
    description: "Um smartphone de última geração com câmera tripla e bateria de longa duração."
  },
  {
    id: "prod_002",
    name: "Laptop Ultrabook",
    price: 1299.00,
    imageUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Laptop+Ultrabook",
    description: "Leve e potente, perfeito para produtividade em qualquer lugar."
  },
  {
    id: "prod_003",
    name: "Fone de Ouvido Bluetooth",
    price: 149.50,
    imageUrl: "https://via.placeholder.com/150/00FF00/FFFFFF?text=Fone+Bluetooth",
    description: "Qualidade de som impecável com cancelamento de ruído ativo."
  },
  {
    id: "prod_004",
    name: "Smartwatch FitPro",
    price: 299.99,
    imageUrl: "https://via.placeholder.com/150/FFFF00/000000?text=Smartwatch+FitPro",
    description: "Monitore sua saúde e receba notificações no seu pulso."
  },
  {
    id: "prod_005",
    name: "Webcam HD Pro",
    price: 89.00,
    imageUrl: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Webcam+HD+Pro",
    description: "Qualidade de vídeo profissional para suas chamadas e streaming."
  }
];

export default products;
  ```
- `js/cart.js`:
  ```javascript
let _cartItems = [];

/**
 * Adiciona um produto ao carrinho.
 * Por enquanto, adiciona o objeto completo do produto.
 * Futuras melhorias podem incluir a gestão de quantidades ou verificação de duplicatas.
 * @param {object} product - O objeto do produto a ser adicionado. Espera-se que contenha um `id`.
 */
function addToCart(product) {
    // Verificando se o produto é válido e se possui um 'id' (conforme products.js)
    if (!product || typeof product.id === 'undefined') {
        console.error('Produto inválido: deve ser um objeto e conter um id.', product);
        return;
    }
    _cartItems.push(product);
    // console.log(`Produto adicionado ao carrinho:`, product);
}

/**
 * Retorna uma cópia do array atual de itens no carrinho.
 * Retorna uma cópia para proteger o estado interno do módulo de modificações externas diretas.
 * @returns {Array<object>} Um array contendo os produtos atualmente no carrinho.
 */
function getCartItems() {
    return [..._cartItems];
}

/**
 * Remove um produto do carrinho com base no seu `id`.
 * @param {string|number} productId - O ID do produto a ser removido (corresponde a `product.id`).
 */
function removeFromCart(productId) {
    const initialLength = _cartItems.length;
    // Filtrando pelo 'id' do produto
    _cartItems = _cartItems.filter(item => item.id !== productId);

    if (_cartItems.length < initialLength) {
        // console.log(`Produto com ID ${productId} removido do carrinho.`);
    } else {
        // console.warn(`Produto com ID ${productId} não encontrado no carrinho.`);
    }
}

export {
    addToCart,
    getCartItems,
    removeFromCart
};
  ```


