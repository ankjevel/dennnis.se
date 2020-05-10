export const hasOwnProperty = (x: any, property: string) =>
  Object.prototype.hasOwnProperty.call(x, property)

export default hasOwnProperty
