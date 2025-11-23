

Tarefas a fazer:
- [ ] Configurar o ambiente de desenvolvimento (ex: Webpack/Vite) para transpilação e empacotamento do JavaScript e CSS.

Tarefas Feitas:
- [X] Crie o arquivo HTML principal que servirá como o ponto de entrada para o aplicativo E-Commerce. Ele deve incluir a estrutura básica do documento HTML5, um título apropriado para a página (ex: 'Meu E-Commerce'), e preparar links para os futuros arquivos CSS e JavaScript que serão criados.
  Detalhes:
  - Criação do arquivo `index.html` com a estrutura básica, meta tags, título, links para `css/style.css` e `js/main.js`, e seções `header`, `main` e `footer`.
- [X] Inicializar o projeto criando o arquivo `package.json`. Este arquivo será fundamental para gerenciar os metadados do projeto, scripts de execução e, principalmente, as dependências de desenvolvimento, como o Vite ou Webpack, que serão instaladas na próxima etapa para configurar o ambiente de desenvolvimento.
  Detalhes:
  - Criação do arquivo `package.json` com metadados básicos do projeto, tipo de módulo ES, e scripts placeholder para desenvolvimento, build e preview.

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
{  "name": "my-fullstack-app",  "version": "0.1.0",  "description": "Um projeto full-stack inicializado para desenvolvimento moderno com suporte a módulos ES.",  "type": "module",  "main": "index.js",  "scripts": {    "dev": "echo \"Tarefa futura: Instale e configure o ambiente de desenvolvimento (ex: vite, webpack-dev-server) aqui.\"",    "build": "echo \"Tarefa futura: Instale e configure o ambiente de build (ex: vite build, webpack) aqui.\"",    "preview": "echo \"Tarefa futura: Configure um servidor para pré-visualizar a build de produção (ex: vite preview) aqui.\""  },  "keywords": [    "fullstack",    "web",    "javascript",    "typescript",    "modern-web"
  ],
  "author": "Seu Nome ou Empresa",
  "license": "MIT",
  "devDependencies": {}
}
  ```


