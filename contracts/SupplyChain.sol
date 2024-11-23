// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {
    struct Product {
        int256 id;
        string productName;
        int256 price;
        int256 quantity;
        address producerAddress;
    }

    struct Order {
        int256 id;
        int256 productId;
        int256 quantity;
        string customerName;
        string status;
        string deliveryAddress;
        address customerAddress;
    }

    mapping(int256 => Product) public products;
    mapping(int256 => Order) public orders;
    mapping(address => string) public producers;
    int256 public totalProduct;
    int256 public totalOrder;

    event ProductAdded(int256 indexed productId, string productName, int256 price, int256 quantity);
    event OrderPlaced(int256 indexed orderId, int256 productId, int256 quantity, string customerName, string status);

    // Add a product by a producer
    function addProduct(string memory _pname, int256 _price, int256 _quantity) public {
        totalProduct++;
        products[totalProduct] = Product(totalProduct, _pname, _price, _quantity, msg.sender);
        emit ProductAdded(totalProduct, _pname, _price, _quantity);
    }

    // Register a producer
    function registerProducer(string memory _name) public {
        producers[msg.sender] = _name;
    }

    // Place an order
    function placeOrder(string memory _cname, string memory _daddress, int256 _pid, int256 _quantity) public {
        require(products[_pid].quantity >= _quantity, "Insufficient product quantity");
        totalOrder++;
        orders[totalOrder] = Order(totalOrder, _pid, _quantity, _cname, "Placed", _daddress, msg.sender);
        products[_pid].quantity -= _quantity;
        emit OrderPlaced(totalOrder, _pid, _quantity, _cname, "Placed");
    }

    // Check if an address is registered
   function isRegistered(address _addr) public view returns (bool) {
    return bytes(producers[_addr]).length > 0;
}


    // Get product details by ID
    function getProductById(int256 _pid) public view returns (Product memory) {
        return products[_pid];
    }

    // Get total products
    function getTotalProduct() public view returns (int256) {
        return totalProduct;
    }

    // Get total orders for a specific address
    function getTotalOrder(address _addr) public view returns (int256) {
        int256 count = 0;
        for (int256 i = 1; i <= totalOrder; i++) {
            if (orders[i].customerAddress == _addr) {
                count++;
            }
        }
        return count;
    }

    // Get order by ID
    function getOrderById(int256 _oid) public view returns (Order memory) {
        return orders[_oid];
    }
}
