export type ParametersOf<Function extends (...args: any[]) => any> =
  Function extends (...args: infer Result) => any ? Result : never
