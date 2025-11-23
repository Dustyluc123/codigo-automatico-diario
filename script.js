console.log("Script principal carregado!");

const products = [
  {
    id: 1,
    name: 'Smartwatch Esportivo X100',
    price: 199.99,
    image: 'images/smartwatch.jpg',
    description: 'Monitor de frequência cardíaca, GPS integrado e bateria de longa duração. Ideal para atletas e entusiastas de fitness.'
  },
  {
    id: 2,
    name: 'Fone de Ouvido Bluetooth Pro',
    price: 89.90,
    image: 'images/headphones.jpg',
    description: 'Qualidade de som premium com cancelamento de ruído ativo e estojo de carregamento. Perfeito para viagens e uso diário.'
  },
  {
    id: 3,
    name: 'Câmera de Segurança HD',
    price: 149.50,
    image: 'images/camera.jpg',
    description: 'Vigilância 24h com detecção de movimento, visão noturna e acesso remoto via aplicativo. Mantenha sua casa segura.'
  },
  {
    id: 4,
    name: 'Power Bank Ultra Rápido 20000mAh',
    price: 59.99,
    image: 'images/powerbank.jpg',
    description: 'Carregue múltiplos dispositivos em movimento com esta bateria externa de alta capacidade. Essencial para quem está sempre conectado.'
  },
  {
    id: 5,
    name: 'Teclado Mecânico RGB Gamer',
    price: 129.99,
    image: 'images/keyboard.jpg',
    description: 'Switches táteis, iluminação RGB personalizável e design ergonômico para gamers. Desempenho e estilo para suas sessões de jogo.'
  },
  {
    id: 6,
    name: 'Mouse Sem Fio Ergonômico',
    price: 35.00,
    image: 'images/mouse.jpg',
    description: 'Design confortável para uso prolongado, sensor óptico de alta precisão e conectividade sem fio estável.'
  },
  {
    id: 7,
    name: 'Webcam Full HD com Microfone',
    price: 75.00,
    image: 'images/webcam.jpg',
    description: 'Qualidade de vídeo 1080p para chamadas e streaming, com microfone embutido para comunicação clara.'
  }
];

// Em um estágio posterior, podemos exportar 'products' ou usá-lo diretamente para renderizar UI.