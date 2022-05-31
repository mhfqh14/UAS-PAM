const PRODUCTS = [
    {
        id: 10,
        name: 'HyperX Cloud II',
        price: 1300000,
        image: require('../assets/products/heperx.jpg'),
        description: 'Headphone Gaming yang nyaman jika dipakai dan juga mempunyai noise-canceling.'
    },
    {
        id: 11,
        name: 'Logitech G Pro X Superlight',
        price: 1900000,
        image: require('../assets/products/prox.jpg'),
        description: 'Mouse Wireless paling ringan dan direkomendasikan dari para pro gamers.'
    },
    {
        id: 12,
        name: 'Logitech Pro X Keyboard',
        price: 1600000,
        image: require('../assets/products/keyboard.jpg'),
        description: 'Keyboard mechanical yang enak dan nyaman dipakai untuk main game maupun mengetik.'
    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

