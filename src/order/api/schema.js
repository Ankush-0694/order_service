const { gql } = require("apollo-server");

const OrderSchema = gql`
  type ProductDetailsWithQuantity {
    productDetails: Product
    quantity: Int
    orderStatus: String
    deliveredDate: String
  }

  # we need to specify input type for mutation argumenmts type
  input ProductDetailsWithQuantityInput {
    productDetails: [ID]
    quantity: Int
  }

  type Order {
    id: ID
    orderedDate: String
    totalQuantity: Int
    totalPrice: Int
    productDetailsWithQuantity: [ProductDetailsWithQuantity] # need to add resoolver for productDetails in Order Schema Resolver
    status: String
    deliveryCharge: Int
    paymentMode: String
    address: Address
  }

  extend type Query {
    getAllOrders: [Order]
    getOrderById(orderID: ID): Order
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
