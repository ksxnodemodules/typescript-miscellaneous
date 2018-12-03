import assert from 'static-type-assert'
import { MaybePromise } from '../../../index'
import compare = assert.compare

compare<
  MaybePromise<123>,
  123 | Promise<123>
>('equal')

compare<
  MaybePromise<Promise<123>>,
  123 | Promise<123>
>('equal')

compare<
  MaybePromise<MaybePromise<123>>,
  123 | Promise<123>
>('equal')
