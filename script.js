document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o ícone do menu hambúrguer e o menu de navegação
    // Assumimos que o ícone tem a classe 'hamburger-menu-button' (para o botão/ícone clicável)
    // e o menu de navegação tem a classe 'nav-menu'.
    // Adapte os seletores (classes/IDs) abaixo para corresponder à sua estrutura HTML.
    const hamburgerButton = document.querySelector('.hamburger-menu-button');
    const navMenu = document.querySelector('.nav-menu');

    // Verifica se ambos os elementos foram encontrados no DOM antes de adicionar o ouvinte de evento
    if (hamburgerButton && navMenu) {
        // Adiciona um ouvinte de evento de 'clique' ao ícone do hambúrguer
        hamburgerButton.addEventListener('click', () => {
            // Adiciona ou remove a classe 'active' do menu de navegação.
            // Esta classe será usada no CSS para controlar a exibição/ocultação do menu
            // em telas menores (dispositivos móveis).
            navMenu.classList.toggle('active');

            // Opcional: Adicionar/remover uma classe ao próprio botão do hambúrguer
            // para mudar seu estado visual (ex: transformá-lo em um 'X' ou animá-lo).
            // hamburgerButton.classList.toggle('is-open');
        });
    } else {
        console.error('Erro: Um ou ambos os elementos do menu hambúrguer (botão/ícone ou menu de navegação) não foram encontrados no DOM. Verifique os seletores .hamburger-menu-button e .nav-menu na sua estrutura HTML.');
    }
});