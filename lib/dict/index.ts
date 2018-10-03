type Dict<Key extends Dict.Key, Value> = {
  [key in Key]: Value
}

namespace Dict {
  export type Key = import ('./key')
}

export = Dict
