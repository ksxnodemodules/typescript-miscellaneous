export type ReturnOf<Function extends (...args: any[]) => any> =
  Function extends (...args: any[]) => infer Result ? Result : never
