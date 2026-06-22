import type { IPaymentStrategy } from '../interface/IPaymentStrategy';
import PaymentMethod from '../types/PaymentMethod';
import { ChequePaymentStrategy } from './ChequePaymentStrategy';
import { CreditCardPaymentStrategy } from './CreditCardPaymentStrategy';
import { DirectDebitPaymentStrategy } from './DirectDebitPaymentStrategy';
import { PayPalPaymentStrategy } from './PayPalPaymentStrategy';

export class PaymentStrategyFactory {
	paymentStrategyMap = new Map<PaymentMethod, IPaymentStrategy>([
		[PaymentMethod.Cheque, new ChequePaymentStrategy()],
		[PaymentMethod.CreditCard, new CreditCardPaymentStrategy()],
		[PaymentMethod.DirectDebit, new DirectDebitPaymentStrategy()],
		[PaymentMethod.PayPal, new PayPalPaymentStrategy()],
	]);

	getPaymentStrategy = (paymentMethod: PaymentMethod) => {
		return this.paymentStrategyMap.get(paymentMethod);
	};
}
