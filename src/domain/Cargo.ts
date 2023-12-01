import { Company } from './Company';
import { PaymentOption } from './PaymentOption';
import { Person } from './Person';
import TransportState from './TransportState';

/**
 * Interface representing the properties of a cargo item.
 */
export interface Cargo {
  id: string; // Unique identifier for the cargo
  description: string; // Description of the cargo item
  weight: number; // Weight of the cargo item in kilograms
  volume: number; // Volume of the cargo item in meters cubed
  // Add additional properties as needed
  fragile: boolean; // Indicates if the cargo is fragile
  rigid: boolean; // Indicates if the cargo is rigid
  dimensions: {
    width: number; // Width of the cargo in centimeters
    height: number; // Height of the cargo in centimeters
    length: number; // Depth of the cargo in centimeters
  };
  srcCompany: Company; // Company that owns the cargo
  dstCompany: Company; // Company that will receive the cargo
  srcPerson: Person; // Person that owns the cargo
  dstPerson: Person; // Person that will receive the cargo
  transportState: TransportState; // Current state of the cargo
  remark: string;
  shipDate: Date; // Date the cargo was shipped
  arrivalDate: Date; // Date the cargo arrives
  paymentOption: PaymentOption; // Payment option for the cargo
  invoiceQuantity: number; // Number of invoices for the cargo
  price: number; // Transport price for the cargo
  rebate: number; // Rebate for the cargo
  // Consider if you'll need methods for behavior related to Cargo,
  // if so, you might want to use a class instead of an interface.
}
