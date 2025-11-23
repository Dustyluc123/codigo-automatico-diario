INICIO_DO_PROJETO

### Tarefas a fazer
- Linkar o arquivo `style.css` ao `index.html` utilizando a tag `<link>` no `<head>` e aplicar estilos básicos globais, como uma fonte padrão para o `body` ou um reset CSS inicial. (PENDENTE)

### Tarefas Feita
- Crie o arquivo `index.html` para servir como a página inicial do e-commerce. Inclua a estrutura HTML básica (doctype, html, head, body), um título apropriado para a loja e um cabeçalho simples (h1) que diga 'Bem-vindo à Nossa Loja'. (CONCLUÍDA)
  Conteúdo adicionado:
  ```html
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nossa Loja Online - Bem-vindo!</title>
  </head>
  <body>
      <h1>Bem-vindo à Nossa Loja</h1>
  </body>
  </html>
  ```
- Implementar a barra de navegação (navbar) no `index.html`. A navbar deve conter links para 'Início', 'Produtos', 'Categorias' e 'Contato'. Utilize elementos semânticos como `<nav>` e `<ul>`/`<li>` para a estrutura dos links. Os links devem ser âncoras (`<a>`) com `href='#'` por enquanto, pois as páginas correspondentes ainda não foram criadas. (CONCLUÍDA)
  Conteúdo adicionado:
  ```html
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Minha Aplicação</title>
  </head>
  <body>
      <header>
          <nav>
              <ul>
                  <li><a href="#">Início</a></li>
                  <li><a href="#">Produtos</a></li>
                  <li><a href="#">Categorias</a></li>
                  <li><a href="#">Contato</a></li>
              </ul>
          </nav>
      </header>

      <main>
          <h1>Bem-vindo à Minha Aplicação</h1>
          <p>Este é o conteúdo principal da página.</p>
      </main>

      <footer>
          <p>&copy; 2023 Minha Aplicação. Todos os direitos reservados.</p>
      </footer>
  </body>
  </html>
  ```
- Crie o arquivo `style.css` na raiz do projeto. Este arquivo será utilizado para estilizar todas as páginas do e-commerce, começando pela página inicial. Por enquanto, o arquivo pode estar vazio ou conter apenas um comentário indicando seu propósito. (CONCLUÍDA)
  Conteúdo adicionado:
  ```css
  /*
   * style.css
   * Este arquivo contém os estilos globais para todas as páginas do e-commerce.
   * Começando pela página inicial.
   */
  ```

### Lista de Todos os arquivos ja crido
- `index.html`
- `style.css`