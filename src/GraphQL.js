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

  /** Reference Resolver for some particular(productDetailsWithQuantity) field in the order schema */
  Order: {
    /** this is the field which needs to be resolved. Remember to name that Field precisely */
    productDetailsWithQuantity(order) {
      return order.productDetailsWithQuantity.map((mappedData) => {
        /* Getting id of product to passed as a ref to product  reference resolver */
        const id = mappedData.productDetails;

        /** Destrurcturing to return the other data same as before with the productData */
        const { quantity, orderStatus, deliveredDate } = mappedData;

        /**This gave us the product data from product service */
        const productData = {
          __typename: "Product",
          id,
        };

        /** Need to specify exactly type of data this resolving field (productDetailsWithQuantity) should return  */
        return {
          productDetails: productData,
          /** Extra fields from here now on , which needs to be returned */
          quantity,
          orderStatus,
          deliveredDate,
        };
      });
    },
  },
};

module.exports = { resolvers };

// astronaut - Product
// missions - Order  - which have a array product having id's

// by adding key(field:"id") to the product,
//we can get the product from other service until we have this id of product
