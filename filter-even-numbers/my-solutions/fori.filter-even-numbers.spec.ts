import { filterNumberList } from './forOf-filter-even-numbers'

describe('filterNumberList', () => {
  it('filter the numbers even numbers from the matrix.', () => {
    const numbers = [3, 10, 7, 100]

    const result = filterNumberList(numbers)

    expect(result).toEqual([10, 100])
  })
})
