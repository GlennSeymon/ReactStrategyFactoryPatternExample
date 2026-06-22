import type { IPaymentStrategy } from '../interface/IPaymentStrategy';

export class ChequePaymentStrategy implements IPaymentStrategy {
	pay = () => 'Paying with Cheque';
}
