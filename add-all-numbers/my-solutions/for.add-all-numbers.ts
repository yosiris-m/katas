export function getTotalSum(numbers: number[]) {
  let total = 0
  for (let i of numbers) {
    total += i
  }
  return total
}
