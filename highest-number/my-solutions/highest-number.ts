export function getHighestNumber(numbers: number[]) {
  if (numbers.length === 0) {
    throw new Error('numbers is empty')
  }

  let highestNumber = numbers[0]

  for (let number of numbers) {
    if (number > highestNumber) {
      highestNumber = number
    }
  }
  return highestNumber
}
