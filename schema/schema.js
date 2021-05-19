const graphql = require("graphql");
const Order = require("../models/Orders");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
} = graphql;

const AddressType = new GraphQLObjectType({
  name: "address",
  fields: () => ({
    fullName: { type: GraphQLString },
    phoneNumber: { type: GraphQLInt },
    pincode: { type: GraphQLInt },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    HouseNo: { type: GraphQLString },
    area: { type: GraphQLString },
    landmark: { type: GraphQLString },
  }),
});

const OrderType = new GraphQLObjectType({
  name: "Order",
  fields: () => ({
    id: { type: GraphQLID },
    productName: { type: GraphQLString },
    productDescription: { type: GraphQLString },
    productPrice: { type: GraphQLInt },
    quantity: { type: GraphQLInt },
    // address: { type: AddressType },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //getting all Orders
    orders: {
      type: new GraphQLList(OrderType),
      resolve(parent, args) {
        return Order.find({});
      },
    },
    //Getting single Product Using the product id
    // order: {
    //   type: OrderType,
    //   args: { id: { type: GraphQLID } },
    //   resolve(parent, args) {
    //     return Product.findById(args.id);
    //   },
    // },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addOrder: {
      type: OrderType,
      args: {
        productName: { type: GraphQLString },
        productDescription: { type: GraphQLString },
        productPrice: { type: GraphQLInt },
        quantity: { type: GraphQLInt },
      },
      resolve(parent, args) {
        let order = new Order({
          productName: args.productName,
          productDescription: args.productDescription,
          productPrice: args.productPrice,
          quantity: args.quantity,
        });
        return order.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
