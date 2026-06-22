import type { IPaymentStrategy } from '../interface/IPaymentStrategy';

export class CreditCardPaymentStrategy implements IPaymentStrategy {
	pay = () => 'Paying with Credit Card';
}
