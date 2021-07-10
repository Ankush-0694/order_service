const { gql } = require("apollo-server");

// instead of product try to refernce to cart
const OrderSchema = gql`
  type Order {
    id: ID
    orderedDate: String
    DeliveredDate: String
    totalQuantity: Int
    totalPrice: Int
    productDetails: [Cart] # need to add resoolver for productDetails in Order Schema Resolver
    status: String
    deliveryCharge: Int
    paymentMode: String
    address: Address
  }

  extend type Query {
    getAllOrders: [Order]
  }

  #to extend the Product Type , provide a key id by which product will be resolved by reference
  extend type Product @key(fields: "id") {
    # this extend the product type ,
    #but neeed to use external to make sure that this id comes from other services
    id: ID @external
  }

  extend type Cart @key(fields: "productID") {
    productID: ID @external
  }

  extend type Mutation {
    addOrder(
      totalQuantity: Int
      totalPrice: Int
      productID: [ID]
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
