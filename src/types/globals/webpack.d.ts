declare module '*.svg' {
  const urlToFile: string
  export default urlToFile
}

declare module '*.css' {
  const classes: { [key: string]: string }

  export default classes
}
