export function fizzBuzzList(argument: number) {
  let result: (number | string)[] = []

  for (let i = 1; i <= argument; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('fizzbuzz')
    } else if (i % 3 === 0) {
      result.push('fizz')
    } else if (i % 5 === 0) {
      result.push('buzz')
    } else {
      result.push(i)
    }
  }

  return result
}
