export function getTotalSum(num: number[]) {
  let total = 0
  for (let i of num) {
    total += i
  }
  return total
}
