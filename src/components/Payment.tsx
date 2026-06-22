import { useState } from 'react';
import PaymentMethod from '../types/PaymentMethod';
import { PaymentStrategyFactory } from '../class/PaymentStrategyFactory';
import PaymentStatus from './PaymentStatus';

const paymentStrategyFactory = new PaymentStrategyFactory();
const paymentMethodKeys = Object.keys(PaymentMethod) as Array<
	keyof typeof PaymentMethod
>;

const Payment = () => {
	const [selectedMethod, setSelectedMethod] = useState<
		keyof typeof PaymentMethod | ''
	>('');
	const [statusMessage, setStatusMessage] = useState('');

	const handlePay = () => {
		if (!selectedMethod) return;
		const message = paymentStrategyFactory
			.getPaymentStrategy(PaymentMethod[selectedMethod])
			?.pay();
		if (message) setStatusMessage(message);
	};

	return (
		<>
			<label htmlFor='payment'>Select a payment method</label>
			<select
				id='payment'
				name='payment'
				value={selectedMethod}
				onChange={(e) =>
					setSelectedMethod(e.target.value as keyof typeof PaymentMethod)
				}
			>
				<option value='' disabled>
					Select payment method
				</option>
				{paymentMethodKeys.map((paymentMethod) => (
					<option key={paymentMethod} value={paymentMethod}>
						{paymentMethod}
					</option>
				))}
			</select>
			<button onClick={handlePay} disabled={!selectedMethod}>
				Pay
			</button>
			{statusMessage && <PaymentStatus message={statusMessage} />}
		</>
	);
};

export default Payment;
