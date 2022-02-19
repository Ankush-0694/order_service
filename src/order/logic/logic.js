const { OrderData } = require("../data/data");
const fetch = require('node-fetch');

const OrderLogic = {
  /** For Queries */

  getAll: () => {
    return OrderData.getAll();
  },

  getByOrderId: (parent, args, context, info) => {
    const orderID = args.orderID;
    return OrderData.getByOrderId(orderID);
  },

  getByCustomerId: (parent, args, context, info) => {
    const customerId = context.user.public_id;
    return OrderData.getByCustomerId(customerId);
  },

  // for getting productId and OrderId using vendorId of product
  getByVendorIdOfProduct : async(parent, args, context, info) => {
    const vendorId = context.user.public_id;

    console.log({vendorId})
    let allOrdersData = await OrderData.getByVendorIdOfProduct();

    const OrderIdProductIdArray = [];

    allOrdersData.map((singleOrder)=>{
      singleOrder.productDetailsWithQuantity.map((singleProductDetails)=>{
        OrderIdProductIdArray.push({orderId : singleOrder._id , productId : singleProductDetails.productDetails})
      })
    })

    // console.log({OrderIdProductIdArray})

    async function getData(productId, orderId){
      // const productId = singleItem.productId;
      try {
        const res =  await fetch(`http://localhost:4001/product/${String(productId)}`);
        const {singleProduct} = await res.json();
        // console.log({productDataVendorId : singleProduct.vendorId ,vendorId })
        // console.log({singleProduct})
        
        if(String(singleProduct.vendorId) == String(vendorId)){
          return { ...singleProduct , productId : singleProduct._id, orderId };
        }
        else{ 
          return ""
        } 
       
      } catch (error) {
        console.error({error})
      }
    }

    let vendorDataForOrder =  await Promise.all( [...OrderIdProductIdArray.map((singleItem)=> getData(singleItem.productId,singleItem.orderId))] ) 

    vendorDataForOrder = vendorDataForOrder.filter(data => data !== "");

    // console.log({vendorDataForOrder})

    return vendorDataForOrder
  },

  /** For Mutations */

  add: (parent, args, context, info) => {
    const {
      totalQuantity,
      totalPrice,
      productDetailsWithQuantity,
      deliveryCharge,
      paymentMode,
      addressID,
    } = args;

    const customerId = context.user.public_id; // passed for every request ( added in context of every service using gateway)

    return OrderData.add(
      customerId,
      totalQuantity,
      totalPrice,
      productDetailsWithQuantity,
      deliveryCharge,
      paymentMode,
      addressID
    );
  },
};

module.exports = { OrderLogic };
