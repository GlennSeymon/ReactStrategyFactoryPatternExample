import type { IPaymentStrategy } from '../interface/IPaymentStrategy';

export class CreditCardPaymentStrategy implements IPaymentStrategy {
	constructor() {}

	pay = () => {
		console.log('Paying with Credit Card');
	};
}
