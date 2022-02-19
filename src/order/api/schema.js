const { gql } = require("apollo-server");

const OrderSchema = gql`
  type ProductDetailsWithQuantity {
    productDetails: Product
    quantity: Int
    orderStatus: String
    deliveredDate: String
  }

  # we needed to specify input type for mutation argumenmts type
  input ProductDetailsWithQuantityInput {
    productDetails: [ID]
    quantity: Int
  }

  type Order {
    id: ID
    customerId: String
    orderedDate: String
    totalQuantity: Int
    totalPrice: Int
    productDetailsWithQuantity: [ProductDetailsWithQuantity] # need to add resolver for productDetailsWithQuantity in Order Schema Resolver
    status: String
    deliveryCharge: Int
    paymentMode: String
    address: Address
  }

  type VendorOrderDetails{
    productId : ID
    vendorId: String
    productName: String
    productDescription: String
    productPrice: Int
    productImageUrl: String
    orderId : ID
  }
  

  extend type Query {
    getAllOrders: [Order]
    getOrderByOrderId(orderID: ID): Order
    getOrdersByCustomerId: [Order]
    getOrdersByVendorIdOfProduct: [VendorOrderDetails]
  }

  #to extend the Product Type , provide a key id by which product will be resolved by reference
  extend type Product @key(fields: "id") {
    # this extend the product type ,
    #but neeed to use external to make sure that this id comes from other services
    id: ID @external
  }

  extend type Mutation {
    addOrder(
      totalQuantity: Int
      totalPrice: Int
      productDetailsWithQuantity: [ProductDetailsWithQuantityInput]
      deliveryCharge: Int
      paymentMode: String
      addressID: ID # no need to use refernce resolve because order and address are in same service
    ): Order
  }
`;

module.exports = { OrderSchema };

//  productName: String;
//  productDescription: String;
//  productPrice: Int;
//  quantity: Int;
