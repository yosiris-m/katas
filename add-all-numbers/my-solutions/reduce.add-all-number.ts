export function getTotalSum(num: number[]) {
  return num.reduce((a, b) => a + b, 0)
}
