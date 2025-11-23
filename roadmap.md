Tarefas a fazer
- Adicionar estilos básicos ao `css/style.css` para o `header`, `nav`, `main` e `footer` do `index.html`. Inclua um reset de CSS simples (margem/padding 0) e defina cores de fundo e padding para as seções principais para visualização.

Tarefas Feita
- Crie o arquivo `index.html` para servir como a página inicial e o ponto de entrada principal do e-commerce. Inclua a estrutura básica de um documento HTML5 (doctype, head, body) e um título provisório. Este arquivo será a base para o desenvolvimento subsequente das outras seções do site. (CONCLUÍDA)
  Conteúdo adicionado ao `index.html`:
  ```html
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Página Inicial - Meu E-commerce</title>
  </head>
  <body>
      <!-- Esta é a página inicial e ponto de entrada principal do e-commerce. -->
      <!-- O conteúdo principal e as seções do site serão desenvolvidos a partir daqui. -->
      <h1>Bem-vindo ao Meu E-commerce!</h1>
      <p>Explore nossos produtos e encontre o que você procura.</p>
  </body>
  </html>
  ```
- Crie o arquivo `style.css` dentro de uma nova pasta `css/` na raiz do projeto. Este arquivo será utilizado para estilizar todo o site. Deixe-o vazio por enquanto. (CONCLUÍDA)
  Conteúdo adicionado ao `css/style.css`:
  (Arquivo vazio, conforme solicitado)
- Adicione a tag `<link>` dentro da seção `<head>` do `index.html` para vincular o arquivo de estilo `css/style.css`. Certifique-se de que o atributo `rel` seja 'stylesheet' e o atributo `href` aponte corretamente para a localização do arquivo CSS ('css/style.css'). Além disso, o `index.html` foi atualizado com uma estrutura básica de layout (header, nav, main, footer). (CONCLUÍDA)
  Conteúdo atualizado do `index.html`:
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Minha Página Estilizada</title>
      <!-- Vincula o arquivo de estilo CSS -->
      <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
      <header>
          <h1>Bem-vindo à Minha Página</h1>
      </header>
      <nav>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Contato</a></li>
          </ul>
      </nav>
      <main>
          <section>
              <h2>Conteúdo Principal</h2>
              <p>Este é um parágrafo de exemplo para demonstrar o conteúdo da página.</p>
              <p>Com o arquivo CSS vinculado, poderemos estilizar esta página em breve!</p>
          </section>
      </main>
      <footer>
          <p>&copy; 2023 Minha Empresa. Todos os direitos reservados.</p>
      </footer>
  </body>
  </html>
  ```

Lista de Todos os arquivos ja crido
- `index.html`
- `css/style.css`