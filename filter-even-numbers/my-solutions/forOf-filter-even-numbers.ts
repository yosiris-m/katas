export function filterNumberList(list: number[]) {
  let numbers = []

  for (const number of list) {
    if (number % 2 === 0) {
      numbers.push(number)
    }
  }
  return numbers
}
