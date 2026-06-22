const PaymentMethod = {
	CreditCard: 0,
	PayPal: 1,
	Cheque: 2,
	DirectDebit: 3,
} as const;

type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];

export default PaymentMethod;
