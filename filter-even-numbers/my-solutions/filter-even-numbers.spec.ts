import { getFilterEvenNumberList } from './filter-even-numbers'

describe('filterNumberList', () => {
  it('filter the numbers even numbers from the matrix.', () => {
    const numbers = [1, 2, 3, 4]

    const result = getFilterEvenNumberList(numbers)

    expect(result).toEqual([2, 4])
  })
})
