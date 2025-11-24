

INICIO_DO_PROJETO

## Tarefas a fazer:

- [ ] Criar o rodapé (footer) da página inicial.
- [ ] Estilizar a página inicial com CSS (style.css).

## Tarefas Feitas:

- [x] Criar a estrutura básica do HTML para a página inicial do e-commerce, incluindo o doctype, a tag html, head (com título e link para o CSS) e body com placeholders para o header, main e footer.
- [x] Implementar o cabeçalho (header) da página inicial, incluindo logotipo, barra de navegação, campo de pesquisa com botão e ícones de ações do usuário (carrinho e minha conta).
- [x] Implementar o conteúdo da seção principal (main) da página inicial. Esta seção deve incluir elementos essenciais de uma homepage de e-commerce, como um banner principal (hero section), uma exibição de produtos em destaque ou categorias populares, e talvez uma seção de ofertas.

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
          <!-- Seção Principal (Hero Section) -->
          <section class="hero-section">
              <div class="hero-content container">
                  <h1>Descubra as Melhores Ofertas!</h1>
                  <p>Produtos incríveis e tendências que você vai amar.</p>
                  <a href="/produtos" class="btn btn-primary">Compre Agora</a>
              </div>
          </section>

          <!-- Seção de Produtos em Destaque -->
          <section class="featured-products container">
              <h2>Produtos em Destaque</h2>
              <div class="product-grid">
                  <div class="product-card">
                      <img src="https://via.placeholder.com/250x250?text=Smartphone" alt="Smartphone X">
                      <h3>Smartphone X Pro</h3>
                      <p class="price">R$ 1.999,99</p>
                      <button class="btn btn-secondary">Adicionar ao Carrinho</button>
                  </div>
                  <div class="product-card">
                      <img src="https://via.placeholder.com/250x250?text=Smartwatch" alt="Smartwatch Y">
                      <h3>Smartwatch Y Fit</h3>
                      <p class="price">R$ 599,99</p>
                      <button class="btn btn-secondary">Adicionar ao Carrinho</button>
                  </div>
                  <div class="product-card">
                      <img src="https://via.placeholder.com/250x250?text=Fone+Bluetooth" alt="Fone de Ouvido Bluetooth Z">
                      <h3>Fone de Ouvido Bluetooth Z</h3>
                      <p class="price">R$ 249,99</p>
                      <button class="btn btn-secondary">Adicionar ao Carrinho</button>
                  </div>
                  <div class="product-card">
                      <img src="https://via.placeholder.com/250x250?text=Notebook" alt="Notebook Gamer Alpha">
                      <h3>Notebook Gamer Alpha</h3>
                      <p class="price">R$ 4.599,99</p>
                      <button class="btn btn-secondary">Adicionar ao Carrinho</button>
                  </div>
              </div>
          </section>

          <!-- Seção de Categorias Populares -->
          <section class="popular-categories container">
              <h2>Categorias Populares</h2>
              <div class="category-grid">
                  <a href="/categorias/eletronicos" class="category-card">
                      <img src="https://via.placeholder.com/150x150?text=Eletrônicos" alt="Eletrônicos">
                      <h3>Eletrônicos</h3>
                  </a>
                  <a href="/categorias/moda" class="category-card">
                      <img src="https://via.placeholder.com/150x150?text=Moda" alt="Moda">
                      <h3>Moda</h3>
                  </a>
                  <a href="/categorias/casa" class="category-card">
                      <img src="https://via.placeholder.com/150x150?text=Casa" alt="Casa e Decoração">
                      <h3>Casa e Decoração</h3>
                  </a>
                  <a href="/categorias/esportes" class="category-card">
                      <img src="https://via.placeholder.com/150x150?text=Esportes" alt="Esportes">
                      <h3>Esportes</h3>
                  </a>
              </div>
          </section>

          <!-- Seção de Ofertas Especiais -->
          <section class="promo-banner container">
              <div class="promo-content">
                  <h2>Não Perca: Ofertas Relâmpago!</h2>
                  <p>Descontos incríveis por tempo limitado. Garanta já o seu!</p>
                  <a href="/ofertas" class="btn btn-primary">Ver Todas as Ofertas</a>
              </div>
          </section>
      </main>

      <footer>
          <!-- Conteúdo do rodapé -->
      </footer>
  </body>
  </html>
  ```
- style.css (arquivo vazio, criado para ser linkado no HTML)



