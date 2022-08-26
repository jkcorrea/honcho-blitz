/** Like Object.hasOwnProperty but narrows the TypeScript type. */
export const hasOwnProperty = <T, K extends PropertyKey>(obj: T, prop: K): obj is T & Record<K, unknown> =>
  Object.prototype.hasOwnProperty.call(obj, prop);
