export enum OrderStatus {
    //when the order has been created but the
    //ticket is trying to order has not been reserved
    Created = 'created',

    //the ticket the order is tryping to reserv alredy
    // been reserved or when user has cancelled order
    // the order has expire before payment
    Cancelled = 'cancelled',

    //the order has successfully reseved ticket
    AwaitingPayment = 'awaiting:payment',

    //the order has reseved ticket and user has
    // provide payment sucessfully
    Compelete = 'complete'
}