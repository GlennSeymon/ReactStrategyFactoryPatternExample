import type { IPaymentStrategy } from '../interface/IPaymentStrategy';

export class PayPalPaymentStrategy implements IPaymentStrategy {
	pay = () => 'Paying with PayPal';
}
