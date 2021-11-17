export function flat(arrays: number[]) {
  let newArray = []

  for (const array of arrays) {
    newArray.push(array)
  }
  return newArray
}
