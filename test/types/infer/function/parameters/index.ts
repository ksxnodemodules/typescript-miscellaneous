import assert from 'static-type-assert'
import { ParametersOf } from '../../../../../index'
import compare = assert.compare

compare<
  ParametersOf<() => void>,
  []
>('equal')

compare<
  ParametersOf<(a: 0, b: 1) => void>,
  [0, 1]
>('equal')
