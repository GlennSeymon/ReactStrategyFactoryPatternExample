import type { IPaymentStrategy } from '../interface/IPaymentStrategy';

export class PayPalPaymentStrategy implements IPaymentStrategy {
	constructor() {}

	pay = () => {
		console.log('Paying with PayPal');
	};
}
