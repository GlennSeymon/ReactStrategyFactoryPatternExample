import type { IPaymentStrategy } from '../interface/IPaymentStrategy';

export class ChequePaymentStrategy implements IPaymentStrategy {
	pay = () => {
		console.log('Paying with Cheque');
	};
}
