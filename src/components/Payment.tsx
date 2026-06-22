import PaymentMethod from '../types/PaymentMethod';
import { PaymentStrategyFactory } from '../class/PaymentStrategyFactory';

const Payment = () => {
	const paymentMethodArray = Object.keys(PaymentMethod).filter((key) =>
		isNaN(Number(key)),
	) as Array<keyof typeof PaymentMethod>;

	return (
		<>
			<label htmlFor='payment'>Select a payment method</label>
			<select
				name='payment'
				onChange={(e) => {
					const paymentStrategy =
						new PaymentStrategyFactory().getPaymentStrategy(
							PaymentMethod[e.target.value as keyof typeof PaymentMethod],
						);
					paymentStrategy?.pay();
				}}
			>
				{paymentMethodArray.map((paymentMethod) => (
					<option key={paymentMethod} value={paymentMethod}>
						{paymentMethod}
					</option>
				))}
			</select>
		</>
	);
};

export default Payment;
