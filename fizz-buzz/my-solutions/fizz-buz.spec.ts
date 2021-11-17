import { fizzBuzzList } from './fizz-buzz'

describe('fizzBuzzList', () => {
  it('should return a list that starts on 1 and ends with that number.', () => {
    const number = 2

    const result = fizzBuzzList(number)

    expect(result).toEqual([1, 2])
  })

  it('return fizz buzz when number is divisible by 3', () => {
    const number = 3

    const result = fizzBuzzList(number)

    expect(result).toEqual([1, 2, 'fizz'])
  })

  it('return fizz buzz when number is divisible by 5', () => {
    const number = 5

    const result = fizzBuzzList(number)

    expect(result).toEqual([1, 2, 'fizz', 4, 'buzz'])
  })

  it('return fizz buzz when number is divisible by 15', () => {
    const number = 15

    const result = fizzBuzzList(number)

    expect(result).toEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz'
    ])
  })
})
