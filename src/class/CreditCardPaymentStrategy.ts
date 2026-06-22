import type { IPaymentStrategy } from '../interface/IPaymentStrategy';

export class CreditCardPaymentStrategy implements IPaymentStrategy {
	pay = () => {
		console.log('Paying with Credit Card');
	};
}
