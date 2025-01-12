function updateImage() {
    const menuSelect = document.getElementById('menu-item');
    const orderImg = document.getElementById('order-img');
    const description = document.getElementById('order-description');
    const menuValue = menuSelect.value;

    if (menuValue === "Latte Senja") {
        orderImg.src = "latte.jpg";
        description.textContent = "Nikmati Latte Senja kami yang hangat dan penuh rasa!";
    } else if (menuValue === "Es Kopi Lembayung") {
        orderImg.src = "es kopi.jpg";
        description.textContent = "Es Kopi Lembayung yang segar dan kaya rasa!";
    } else if (menuValue === "Teh Peach") {
        orderImg.src = "teh peach.jpg";
        description.textContent = "Nikmati sensasi teh peach yang menyegarkan!";
    }
}

function calculateTotal() {
    const menuSelect = document.getElementById('menu-item');
    const sizeSelect = document.getElementById('size');
    const quantityInput = document.getElementById('quantity');
    const totalPriceElement = document.getElementById('total-price');
    
    const basePrice = parseInt(menuSelect.selectedOptions[0].getAttribute('data-price'));
    const sizeMultiplier = parseFloat(sizeSelect.selectedOptions[0].getAttribute('data-multiplier'));
    const quantity = parseInt(quantityInput.value);
    
    const totalPrice = basePrice * sizeMultiplier * quantity;
    totalPriceElement.textContent = `Rp${totalPrice.toLocaleString()}`;
}

function submitOrder(event) {
    event.preventDefault();
    alert("Pesanan Anda telah diterima!");
}
