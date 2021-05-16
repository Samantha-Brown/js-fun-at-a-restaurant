
function takeOrder(newOrder, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(newOrder);
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  for (i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1)
    }
  }
}

//function listItems(deliveryOrders) {
//  for (i = 0; i < deliveryOrders.length; i++) {
//    return deliveryOrders[i].item.concat(', ', deliveryOrders[i+1].item).concat(', ', deliveryOrders[i+2].item);
//  }
//}

function listItems(deliveryOrders) {
  var newArray = [];
  for (i = 0; i < deliveryOrders.length; i++) {
    newArray.push(deliveryOrders[i].item);

  }
  return newArray.join(', ');
}


function searchOrder(deliveryOrders, food) {
  for (i =0 ; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === food) {
      return (true);
    }
  }
    return (false);
};



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
