import { flat } from './flat'

describe('flat', () => {
  it('takes the matrices and joins them into one.', () => {
    const array = [1, 2, 3]

    const result = flat(array)

    expect(result).toEqual([1, 2, 3])
  })
})
