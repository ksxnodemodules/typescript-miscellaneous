import assert from 'static-type-assert'
import { PromiseValue } from '../../../../index'
import compare = assert.compare

compare<
  PromiseValue<Promise<123>>,
  123
>('equal')
