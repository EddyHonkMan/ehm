enum TransportState {
  NotShipped = 'NOT_SHIPPED',
  InTransit = 'IN_TRANSIT',
  AwaitingTransshipment = 'AWAITING_TRANSSHIPMENT',
  Arrived = 'ARRIVED',
  Delayed = 'DELAYED', // Added as a common occurrence in transport
  OutForDelivery = 'OUT_FOR_DELIVERY', // When the cargo is in the last leg of delivery
  Delivered = 'DELIVERED', // Successfully delivered
  AwaitingPickUp = 'AWAITING_PICKUP', // When the cargo is ready for pickup
  PickedUp = 'PICKED_UP' // When the cargo has been picked up
}

export default TransportState;
