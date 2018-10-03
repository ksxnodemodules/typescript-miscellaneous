# TypeScript Miscellaneous

## Requirements

* TypeScript ≥ 2.7.0

## Usage

### `Dict`

**Without TypeScript Miscellaneous:**

```typescript
type MyObj = {
  a: number
  b: number
  c: number
  0: number
  1: number
}
```

**With TypeScript Miscellaneous:**

```typescript
import { Dict } from 'typescript-miscellaneous'

type MyObj = Dict<
  'a' | 'b' | 'c' | 0 | 1,
  number
>
```

## License

[MIT](https://git.io/fxIAz) © [Hoàng Văn Khải](https://github.com/KSXGitHub)
