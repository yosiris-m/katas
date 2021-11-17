import { filterNumberList } from './fori.filter-even-numbers'

describe('filterNumberList', () => {
  it('filter the numbers even numbers from the matrix.', () => {
    const numbers = [12, 1, 5, 60, 55, 2, 3, 4]

    const result = filterNumberList(numbers)

    expect(result).toEqual([12, 60, 2, 4])
  })
})
