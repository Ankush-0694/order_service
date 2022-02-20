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

    // console.log({vendorId})
    let allOrdersData = await OrderData.getByVendorIdOfProduct();

    const OrderProductMapArray = [];


    // could be better , but we are just creating a array with order and individual product
    allOrdersData.map((singleOrder)=>{
      singleOrder.productDetailsWithQuantity.map((singleProductDetails)=>{
        OrderProductMapArray.push({orderDetails : singleOrder, productData : singleProductDetails})
      })
    })

    // get product details using product by given rest api in product service
    async function getProductDetails(productId){
      // const productId = singleItem.productId;
      try {
        const res =  await fetch(`http://localhost:4001/product/${String(productId)}`);
        const {singleProduct} = await res.json();
        // console.log({productDataVendorId : singleProduct.vendorId ,vendorId })
        // console.log({singleProduct})
        
        if(String(singleProduct.vendorId) == String(vendorId)){
          return { ...singleProduct , productId : singleProduct._id };
        }
      } catch (error) {
        console.error({error})
      }
    }


    let vendorDataForOrder =  await Promise.all( [...OrderProductMapArray.map(async(singleItem)=>{
      const { orderDetails , productData } = singleItem;

      const productId = productData.productDetails;

      const productDetails = await getProductDetails(productId);

      // console.log({productDetails})

      // if for given product vendorId not matched then getProductDetails will return nothing
      if(!productDetails) return "";
     
      return {
        ...productDetails,
        orderStatus : productData.orderStatus,
        deliveredDate : productData.deliveredDate,
        quantity : productData.quantity, 
        orderedDate : orderDetails.orderedDate, 
        orderId : orderDetails._id,
        customerId : orderDetails.customerId
      }

    })]) 

    // trim empty strings
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
