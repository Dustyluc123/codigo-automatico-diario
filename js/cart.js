let _cartItems = [];

/**
 * Adiciona um produto ao carrinho.
 * Por enquanto, adiciona o objeto completo do produto.
 * Futuras melhorias podem incluir a gestão de quantidades ou verificação de duplicatas.
 * @param {object} product - O objeto do produto a ser adicionado. Espera-se que contenha um `productId`.
 */
function addToCart(product) {
    if (!product || typeof product.productId === 'undefined') {
        console.error('Produto inválido: deve ser um objeto e conter um productId.', product);
        return;
    }
    _cartItems.push(product);
    // console.log(`Produto adicionado ao carrinho:`, product);
}

/**
 * Retorna uma cópia do array atual de itens no carrinho.
 * Retorna uma cópia para proteger o estado interno do módulo de modificações externas diretas.
 * @returns {Array<object>} Um array contendo os produtos atualmente no carrinho.
 */
function getCartItems() {
    return [..._cartItems];
}

/**
 * Remove um produto do carrinho com base no seu `productId`.
 * @param {string|number} productId - O ID do produto a ser removido.
 */
function removeFromCart(productId) {
    const initialLength = _cartItems.length;
    _cartItems = _cartItems.filter(item => item.productId !== productId);

    if (_cartItems.length < initialLength) {
        // console.log(`Produto com ID ${productId} removido do carrinho.`);
    } else {
        // console.warn(`Produto com ID ${productId} não encontrado no carrinho.`);
    }
}

export {
    addToCart,
    getCartItems,
    removeFromCart
};
