import { getPowerOfTwo } from './for-power-of-two'

describe('getPowerOfTwo', () => {
  it('should get list squared', () => {
    const numbers = [1, 2, 3]

    const result = getPowerOfTwo(numbers)

    const expected = [1, 4, 9]
    expect(result).toEqual(expected)
  })

  it('should get list squared', () => {
    const numbers = [-3, -2]

    const result = getPowerOfTwo(numbers)

    const expected = [9, 4]
    expect(result).toEqual(expected)
  })
})
