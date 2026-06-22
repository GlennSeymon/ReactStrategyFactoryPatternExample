import type { IPaymentStrategy } from '../interface/IPaymentStrategy';

export class DirectDebitPaymentStrategy implements IPaymentStrategy {
	constructor() {}

	pay = () => {
		console.log('Paying with DirectDebit');
	};
}
