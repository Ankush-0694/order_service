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
};

module.exports = { resolvers };
