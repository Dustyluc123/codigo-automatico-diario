## RoadMap

### Tarefas a fazer
*   Estilize o cabeçalho (header) no `index.html` usando o arquivo `src/assets/css/style.css`. Aplique um estilo básico como `background-color`, `color` e `padding` para começar a dar uma aparência visual à página.

### Tarefas Feita
*   [CONCLUÍDA] Crie o arquivo `index.html` na raiz do projeto. Este arquivo contém a estrutura básica de um documento HTML5: declaração `<!DOCTYPE html>`, tags `<html>`, `<head>` (incluindo meta tags para charset e viewport, e um título inicial como 'E-Commerce JS Pura'), e um `<body>` vazio. Este é o ponto de entrada para a aplicação front-end.
    ```html
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>E-Commerce JS Pura</title>
    </head>
    <body>

    </body>
    </html>
    ```
*   [CONCLUÍDA] Crie o arquivo `style.css` na pasta `src/assets/css/` e vinculá-lo ao `index.html`. Este arquivo é o ponto de partida para toda a estilização do projeto E-Commerce, seguindo a estrutura de diretórios padrão. O conteúdo inicial é um comentário básico para indicar a criação do arquivo.
    ```css
    /*
     * src/assets/css/style.css
     *
     * Este arquivo é o ponto de partida para toda a estilização do projeto E-Commerce.
     * Segue a estrutura de diretórios padrão e será expandido conforme a necessidade.
     */
    ```
*   [CONCLUÍDA] Crie o arquivo `main.js` na pasta `src/js/`. Adicione um `console.log('main.js carregado com sucesso!');` inicial para verificar o carregamento. Em seguida, adicione a tag `<script src="src/js/main.js" defer></script>` no `index.html`, logo antes do fechamento da tag `</body>`, para vincular o script à página.
    ```javascript
    console.log('main.js carregado com sucesso!');
    ```
*   [CONCLUÍDA] Adicione uma estrutura básica de cabeçalho (header) ao `index.html`. Este cabeçalho inclui uma seção para o título ou logo do site (um `<h1>` com 'E-Commerce JS') e um espaço para a futura navegação principal (um `<nav>` vazio). O cabeçalho foi posicionado dentro da tag `<body>` para começar a definir o layout visual da página.
    ```html
    <!-- Conteúdo adicionado ao <body> do index.html -->
    <header>
        <h1>E-Commerce JS</h1>
        <nav>
            <!-- Futura navegação principal -->
        </nav>
    </header>
    ```

### Lista de Todos os arquivos ja crido
*   `index.html`
*   `style.css`
*   `main.js`