// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {
    struct Product {
        uint id;
        string name;
        uint price;
        uint quantity;
        address seller;
    }

    struct Order {
        uint id;
        uint productId;
        uint quantity;
        address buyer;
        string deliveryAddress;
    }

    uint public productCount = 0;
    uint public orderCount = 0;

    mapping(uint => Product) public products;
    mapping(uint => Order) public orders;

    event ProductAdded(uint productId, string name, uint price, uint quantity, address seller);
    event OrderPlaced(uint orderId, uint productId, uint quantity, address buyer, string deliveryAddress);

    modifier onlySeller(uint productId) {
        require(products[productId].seller == msg.sender, "Only the seller can modify this product");
        _;
    }

    // Function to add a new product to the supply chain
    function addProduct(string memory name, uint price, uint quantity) public {
        require(price > 0, "Price must be greater than zero");
        require(quantity > 0, "Quantity must be greater than zero");

        productCount++;
        products[productCount] = Product(productCount, name, price, quantity, msg.sender);

        emit ProductAdded(productCount, name, price, quantity, msg.sender);
    }

    // Function to update an existing product (e.g., after a sale)
    function updateProduct(uint productId, uint price, uint quantity) public onlySeller(productId) {
        require(price > 0, "Price must be greater than zero");
        require(quantity >= 0, "Quantity must be non-negative");

        products[productId].price = price;
        products[productId].quantity = quantity;

        emit ProductAdded(productId, products[productId].name, price, quantity, msg.sender);
    }

    // Function for a buyer to place an order
    function placeOrder(uint productId, uint quantity, string memory deliveryAddress) public {
        require(products[productId].id != 0, "Product does not exist");
        require(products[productId].quantity >= quantity, "Insufficient product quantity");

        products[productId].quantity -= quantity;

        orderCount++;
        orders[orderCount] = Order(orderCount, productId, quantity, msg.sender, deliveryAddress);

        emit OrderPlaced(orderCount, productId, quantity, msg.sender, deliveryAddress);
    }

    // Function to fetch a single product by its ID
    function getProduct(uint productId) public view returns (Product memory) {
        return products[productId];
    }

    // Function to fetch a single order by its ID
    function getOrder(uint orderId) public view returns (Order memory) {
        return orders[orderId];
    }

    // Function to fetch all products (will be useful for the frontend)
    function getAllProducts() public view returns (Product[] memory) {
        Product[] memory allProducts = new Product[](productCount);
        for (uint i = 1; i <= productCount; i++) {
            allProducts[i - 1] = products[i];
        }
        return allProducts;
    }
}
