export function fizzBuzzList(argument: number) {
  let result: (number | string)[] = []

  for (let i = 1; i <= argument; i++) {
    let numDivisibleByThree = i % 3 === 0
    let numDivisibleByFive = i % 5 === 0

    if (numDivisibleByThree && numDivisibleByFive) {
      result.push('fizzbuzz')
    } else if (numDivisibleByThree) {
      result.push('fizz')
    } else if (numDivisibleByFive) {
      result.push('buzz')
    } else {
      result.push(i)
    }
  }

  return result
}
