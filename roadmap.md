

Tarefas a fazer:
- [ ] Adicionar estilos CSS básicos para os cards de produtos e o container de produtos no arquivo `css/style.css`. Isso inclui configurar o `products-container` para exibir os cards em um layout de grade (`display: grid`), adicionar espaçamento, bordas e sombras aos `product-card` para torná-los visualmente mais atraentes e organizados.

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
}
  ```
- `js/main.js`:
  ```javascript
// js/main.js

// Importa o array de produtos mock do arquivo de dados
import products from './data/products.js'; // Importação padrão corrigida

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
    productImage.src = product.imageUrl; // Corrigido para usar 'imageUrl' conforme definido em products.js
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

    // Anexa os elementos de informação ao card do produto
    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);

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


