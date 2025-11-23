

Tarefas a fazer:

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

// Verifica se o script está sendo carregado corretamente
console.log('Vite: Script js/main.js carregado com sucesso!');

// Encontra o elemento com o ID 'app-root'
const appRootElement = document.getElementById('app-root');

// Modifica o conteúdo do elemento se ele existir
if (appRootElement) {
  appRootElement.textContent = 'Olá do JavaScript! O script foi inicializado com sucesso pelo Vite.';
  // Opcional: Adiciona um pouco de estilo para tornar a mudança mais visível
  appRootElement.style.color = '#28a745'; // Bootstrap success green
  appRootElement.style.fontWeight = 'bold';
  appRootElement.style.padding = '10px';
  appRootElement.style.border = '1px solid #28a745';
  appRootElement.style.borderRadius = '5px';
  
  console.log('Vite: Conteúdo do elemento #app-root atualizado pelo JavaScript.');
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


