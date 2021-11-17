export function flat(...arrays: number[][]) {
  let newArray: number[] = []

  for (const array of arrays) {
    newArray = newArray.concat(array)
  }

  return newArray
}
