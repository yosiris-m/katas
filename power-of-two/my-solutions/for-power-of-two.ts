export function getPowerOfTwo(list: number[]) {
  // let result: number[] = []
  //
  // for (const number of list) {
  //   result.push(number ** 2)
  // }
  //
  // return result

  return list.map(n => n ** 2)
}
