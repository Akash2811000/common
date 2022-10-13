"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    //when the order has been created but the
    //ticket is trying to order has not been reserved
    OrderStatus["Created"] = "created";
    //the ticket the order is tryping to reserv alredy
    // been reserved or when user has cancelled order
    // the order has expire before payment
    OrderStatus["Cancelled"] = "cancelled";
    //the order has successfully reseved ticket
    OrderStatus["AwaitingPayment"] = "awaiting:payment";
    //the order has reseved ticket and user has
    // provide payment sucessfully
    OrderStatus["Compelete"] = "complete";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
