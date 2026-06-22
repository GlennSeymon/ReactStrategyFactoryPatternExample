import type { IPaymentStrategy } from '../interface/IPaymentStrategy';

export class DirectDebitPaymentStrategy implements IPaymentStrategy {
	pay = () => {
		console.log('Paying with DirectDebit');
	};
}
