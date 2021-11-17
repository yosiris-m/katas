import { flat } from './for-flat'

describe('flat', () => {
  it('takes one array and returns the same array.', () => {
    const array = [1, 2, 3]

    const result = flat(array)

    expect(result).toEqual([1, 2, 3])
  })

  it('takes two arrays and joins them into one.', () => {
    const array1 = [1, 2, 3]
    const array2 = [4, 5, 6]

    const result = flat(array1, array2)

    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })
})
