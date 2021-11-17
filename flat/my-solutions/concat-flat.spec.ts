import { flat } from './concat-flat'

describe('flat', () => {
  it('takes one array and returns the same array.', () => {
    const array = [7, 8, 9]

    const result = flat(array)

    expect(result).toEqual([7, 8, 9])
  })

  it('takes two arrays and joins them into one.', () => {
    const array1 = [7, 8, 9]
    const array2 = [10, 11, 12]

    const result = flat(array1, array2)

    expect(result).toEqual([7, 8, 9, 10, 11, 12])
  })
})
