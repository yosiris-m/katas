export function forEach<T>(list: T[], callback: (x: T) => void) {
  for (let value of list) {
    callback(value)
  }
}
