const { addOrder } = require("./Mutations/Mutations");
const { orders } = require("./Queries/Queries");

const resolvers = {
  Query: {
    orders,
  },
  Mutation: {
    addOrder,
  },
};
module.exports = { resolvers };
