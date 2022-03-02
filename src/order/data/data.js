const Order = require("../../../models/Orders");

const OrderData = {
  /** For Queries */
  getAll: async () => {
    const orderToreturn = await Order.find({}).populate("address");
    return orderToreturn;
  },

  getByOrderId: async (orderID) => {
    const orderToreturn = await Order.findById(orderID).populate("address");
    return orderToreturn;
  },

  getByCustomerId: async (customerId) => {
    const orderToreturn = await Order.find({ customerId }).populate("address");
    return orderToreturn;
  },

  getByVendorIdOfProduct : async()=>{
    const allOrders = await Order.find({});
    return allOrders;
  },

  /** For Mutations */

  add: async (
    customerId,
    totalQuantity,
    totalPrice,
    productDetailsWithQuantity,
    deliveryCharge,
    paymentMode,
    addressID
  ) => {
    const orderToSave = new Order({
      customerId,
      totalQuantity,
      totalPrice,
      productDetailsWithQuantity,
      deliveryCharge,
      paymentMode,
      address: addressID,
    });

    let savedOrder = await orderToSave.save(); // can't use populate here, will give error

    return savedOrder.populate("address").execPopulate();
  },

  changeOrderStatus : async(productId, orderId, newStatus)=>{
    try {
      const orderData = await Order.findById(orderId);
      const productData = orderData.productDetailsWithQuantity;
      console.log({orderData})
      for(let singleProduct of productData){
        if(singleProduct.productDetails == productId){
          singleProduct.orderStatus = newStatus;

          if(newStatus == "delivered"){
            singleProduct.deliveredDate = new Date();
          }
        }

      }

      const newOrderData = await orderData.save();
      console.log({newOrderData});

      return `Changed Status to ${newStatus} successfully`;
    } catch (error) {
      console.log({error})
      throw error;
    }
  }
};

module.exports = {
  OrderData,
};


