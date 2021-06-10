const { OrderMutation } = require("./order/api/mutation");
const { OrderQuery } = require("./order/api/query");

const resolvers = {
  Query: {
    ...OrderQuery,
  },
  Mutation: {
    ...OrderMutation,
  },
};

module.exports = { resolvers };
