export type Dict<Key extends Dict.Key, Value> = {
  [key in Key]: Value
}

export namespace Dict {
  export type Key = string | number | symbol
}
