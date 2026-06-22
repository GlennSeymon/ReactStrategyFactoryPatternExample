import type { IPaymentStrategy } from '../interface/IPaymentStrategy';

export class ChequePaymentStrategy implements IPaymentStrategy {
	constructor() {}

	pay = () => {
		console.log('Paying with Cheque');
	};
}
