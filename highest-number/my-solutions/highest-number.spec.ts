import { getHighestNumber } from './highest-number'

describe('getHighestNumber', () => {
  it('should throw an error when numbers is empty', () => {
    let numbers: number[] = []

    expect(() => {
      getHighestNumber(numbers)
    }).toThrowError('numbers is empty')
  })

  it('returns the number if numbers only contains one number', () => {
    let numbers = [1]

    const num = getHighestNumber(numbers)

    expect(num).toBe(1)
  })

  it('returns the highest number of the array', () => {
    let numbers = [1, 3, 2]
    const num = getHighestNumber(numbers)

    expect(num).toBe(3)
  })

  it('returns the highest number of an array of negative numbers', () => {
    let numbers = [-1, -2, -3]

    const num = getHighestNumber(numbers)

    expect(num).toBe(-1)
  })
})
