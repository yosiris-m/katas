export function filterNumberList(list: number[]) {
  let numbers = []

  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
      numbers.push(list[i])
    }
  }
  return numbers
}
