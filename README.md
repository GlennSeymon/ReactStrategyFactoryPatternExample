# Strategy + Factory Pattern in React / TypeScript

An example of how to implement the combined use of the Strategy and Factory patterns in React/TypeScript.

## Overview

This project demonstrates how two classic design patterns work together to produce clean, extensible payment processing logic:

- **Strategy Pattern** — defines a family of interchangeable algorithms (payment methods) behind a common interface, so they can be swapped at runtime without the caller knowing the details.
- **Factory Pattern** — centralises the creation of those strategy objects, decoupling the consumer from concrete implementations.

## Project Structure

```
src/
├── components/
│   └── Payment.tsx              # UI — dropdown that triggers the selected strategy
├── interface/
│   └── IPaymentStrategy.ts      # Common interface all strategies must implement
├── types/
│   └── PaymentMethod.ts         # Enum-like const object for payment method keys
└── class/
    ├── PaymentStrategyFactory.ts        # Maps a PaymentMethod to its strategy
    ├── CreditCardPaymentStrategy.ts
    ├── PayPalPaymentStrategy.ts
    ├── ChequePaymentStrategy.ts
    └── DirectDebitPaymentStrategy.ts
```

## How It Works

1. `IPaymentStrategy` declares the `pay()` contract every strategy must fulfil.
2. Each concrete strategy class (e.g. `CreditCardPaymentStrategy`) implements that interface.
3. `PaymentStrategyFactory` holds a map of `PaymentMethod → IPaymentStrategy` and exposes `getPaymentStrategy()` to retrieve the right one.
4. The `Payment` component calls the factory on dropdown change and invokes `pay()` on the returned strategy — it never references a concrete strategy directly.

## Adding a New Payment Method

1. Add a new key to `PaymentMethod` in `src/types/PaymentMethod.ts`.
2. Create a new class in `src/class/` that implements `IPaymentStrategy`.
3. Register it in the `paymentStrategyMap` inside `PaymentStrategyFactory`.

No other files need to change.

## Getting Started

```bash
npm install
npm run dev
```

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
