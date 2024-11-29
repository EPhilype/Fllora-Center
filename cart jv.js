let cart = [
    { name: 'Flor Tropical 1', price: 29.99, quantity: 1 },
    { name: 'Flor Tropical 2', price: 19.99, quantity: 2 },
    { name: 'Flor Tropical 3', price: 49.99, quantity: 1 }
];

// Função para adicionar itens ao carrinho
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = ''; // Limpa o carrinho

    let total = 0;

    cart.forEach(item => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.name}</td>
            <td>R$ ${item.price.toFixed(2)}</td>
            <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', this.value)"></td>
            <td>R$ ${(item.price * item.quantity).toFixed(2)}</td>
            <td><button onclick="removeFromCart('${item.name}')">Remover</button></td>
        `;

        cartItemsContainer.appendChild(row);
        total += item.price * item.quantity;
    });

    document.getElementById('totalPrice').textContent = total.toFixed(2);
}

// Função para atualizar a quantidade de um item no carrinho
function updateQuantity(name, quantity) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity = parseInt(quantity);
        updateCartDisplay();
    }
}

// Função para remover um item do carrinho
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCartDisplay();
}

// Função para finalizar a compra (simulação)
function finalizePurchase() {
    alert('Compra finalizada com sucesso! Em breve você receberá as flores.');
    cart = [];  // Limpa o carrinho
    updateCartDisplay();  // Atualiza a exibição
}

// Atualiza a exibição do carrinho ao carregar a página
updateCartDisplay();
