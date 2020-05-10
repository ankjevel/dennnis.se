export const classNames = (classNames: MaybeUndefined<MaybeNull<string>>[]) =>
  classNames.filter((x) => x).join(' ')

export default classNames
