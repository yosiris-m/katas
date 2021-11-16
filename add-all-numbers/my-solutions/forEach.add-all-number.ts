export function getTotalSum(numbers: number[]) {
  let total = 0
  numbers.forEach(function (n) {
    total += n
  })
  return total
}
