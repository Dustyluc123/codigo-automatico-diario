

INICIO_DO_PROJETO

## Tarefas a fazer:

- [ ] Desenvolver a seção principal (main) da página inicial.
- [ ] Criar o rodapé (footer) da página inicial.
- [ ] Estilizar a página inicial com CSS (style.css).

## Tarefas Feitas:

- [x] Criar a estrutura básica do HTML para a página inicial do e-commerce, incluindo o doctype, a tag html, head (com título e link para o CSS) e body com placeholders para o header, main e footer.
- [x] Implementar o cabeçalho (header) da página inicial, incluindo logotipo, barra de navegação, campo de pesquisa com botão e ícones de ações do usuário (carrinho e minha conta).

## Lista de Todos os arquivos ja criados:

- index.html
  ```html
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>E-commerce</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <div class="header-container">
              <div class="logo">
                  <a href="/">E-commerce Logo</a>
              </div>

              <nav class="main-nav">
                  <ul>
                      <li><a href="/">Início</a></li>
                      <li><a href="/produtos">Produtos</a></li>
                      <li><a href="/categorias">Categorias</a></li>
                      <li><a href="/ofertas">Ofertas</a></li>
                      <li><a href="/contato">Contato</a></li>
                  </ul>
              </nav>

              <div class="header-actions">
                  <form class="search-form">
                      <input type="search" placeholder="Buscar produtos...">
                      <button type="submit">Buscar</button>
                  </form>

                  <div class="user-actions">
                      <a href="/carrinho" class="cart-icon">Carrinho</a>
                      <a href="/minha-conta" class="account-icon">Minha Conta</a>
                  </div>
              </div>
          </div>
      </header>

      <main>
          <!-- Conteúdo principal -->
      </main>

      <footer>
          <!-- Conteúdo do rodapé -->
      </footer>
  </body>
  </html>
  ```
- style.css (arquivo vazio, criado para ser linkado no HTML)



