import type { IPaymentStrategy } from '../interface/IPaymentStrategy';

export class DirectDebitPaymentStrategy implements IPaymentStrategy {
	pay = () => 'Paying with DirectDebit';
}
