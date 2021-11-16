export function getTotalSum(num: number[]) {
  let total: number = 0
  num.forEach(function (n) {
    total += n
  })
  return total
}
