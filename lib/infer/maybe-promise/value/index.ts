export type MaybePromiseValue<Type> =
  Type extends Promise<infer Value> ? Value : Type
