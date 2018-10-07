export type ElementOf<List extends Iterable<any>> =
  List extends Iterable<infer Result> ? Result : never
