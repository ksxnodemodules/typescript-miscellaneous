import { MaybePromiseValue } from '../infer'

export type MaybePromise<Value> =
  MaybePromiseValue<Value> |
  Promise<MaybePromiseValue<Value>>
