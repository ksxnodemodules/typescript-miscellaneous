import assert from 'static-type-assert'
import { MaybePromiseValue, MaybePromise } from '../../../../index'
import compare = assert.compare

compare<
  MaybePromiseValue<123>,
  123
>('equal')

compare<
  MaybePromiseValue<Promise<123>>,
  123
>('equal')

compare<
  MaybePromiseValue<MaybePromise<123>>,
  123
>('equal')
