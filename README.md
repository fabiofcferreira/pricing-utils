# pricing-utils

`pricing-utils` is a simple pricing utils to reduce code replication & calculation errors

## Install

```bash
yarn add pricing-utils
```

## Usage

```typescript
import { roundPrice, calculateNetPrice, calculateGrossPrice } from './pricing-utils';

const roundedPrice = roundPrice(19.984, 2); // 19.98
const roundedPrice = calculateGrossPrice(16.25, 23); // 16.25 + 23% VAT = 19.99
const roundedPrice = calculateNetPrice(19.99, 23); // 19.99 - 23% VAT = 16.25
```
