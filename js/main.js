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