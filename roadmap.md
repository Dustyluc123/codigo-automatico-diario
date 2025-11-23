# Roadmap do Projeto

## Tarefas a fazer:
- [ ] Crie o arquivo JavaScript principal (`script.js`) em `assets/js/` para futuras interatividades da aplicação. Por enquanto, pode ser um arquivo vazio ou com um `console.log` simples para verificar o link.

## Tarefas Feitas:
- [x] Crie o arquivo HTML principal para o projeto. Este será o ponto de entrada da aplicação, onde os outros componentes (CSS, JavaScript) serão vinculados e o conteúdo inicial da loja será renderizado. Por enquanto, pode ser um arquivo HTML básico com um título e uma mensagem de 'Olá Mundo' para confirmar que está funcionando.
- [x] Crie o arquivo CSS principal (styles.css) em `assets/css/` para definir os estilos globais da aplicação. Inclua resets básicos e algumas regras de estilo iniciais para o header, main e footer.

## Lista de Todos os arquivos já criados:

### `index.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Loja Online - Em Construção</title>
    <!-- Vinculação de CSS: O arquivo 'styles.css' será criado em './assets/css/' -->
    <link rel="stylesheet" href="./assets/css/styles.css">
</head>
<body>
    <header>
        <h1>Bem-vindo à Minha Loja Online!</h1>
    </header>
    <main>
        <p>Olá Mundo! Estamos construindo algo incrível para você.</p>
        <p>Este é o ponto de entrada da nossa aplicação. Fique ligado para as próximas atualizações!</p>
    </main>
    <footer>
        <p>&copy; 2023 Minha Loja Online</p>
    </footer>
    <!-- Vinculação de JavaScript: O arquivo 'script.js' será criado em './assets/js/' -->
    <!-- <script src="./assets/js/script.js"></script> -->
</body>
</html>
```

### `assets/css/styles.css`
```css
/* assets/css/styles.css */

/* Global Resets */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
}

/* Header Styles */
header {
    background-color: #333;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

header p {
    font-size: 1rem;
}

/* Main Content Styles */
main {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

/* Footer Styles */
footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1.5rem 0;
    margin-top: 2rem;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
}

footer p {
    font-size: 0.9rem;
}
```
