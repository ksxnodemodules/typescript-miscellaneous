export type PromiseValue<Type extends PromiseLike<any>> =
  Type extends PromiseLike<infer Value> ? Value : never
