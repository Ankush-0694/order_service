const { OrderMutation } = require("./order/api/mutation");
const { OrderQuery } = require("./order/api/query");
const { AddressQuery } = require("./address/api/query");
const { AddressMutation } = require("./address/api/mutation");

const resolvers = {
  Query: {
    ...OrderQuery,
    ...AddressQuery,
  },
  Mutation: {
    ...OrderMutation,
    ...AddressMutation,
  },
  // resolver for order field to get the product details
  Order: {
    productDetails(order) {
      return order.productDetails.map((id) => {
        // productDetails array comes from db which have array of ids, then here we mapped it
        // then it will go to cart as a ref Object, there we resolve it and get the data and return it
        return { __typename: "Cart", productID: id };
      });
    },
  },
};

module.exports = { resolvers };

// astronaut - Product
// missions - Order  - which have a array product having id's

// by adding key(field:"id") to the product,
//we can get the product from other service until we have this id of product
