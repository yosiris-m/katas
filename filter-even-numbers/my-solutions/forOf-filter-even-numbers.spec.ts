import { filterNumberList } from './fori.filter-even-numbers'

describe('filterNumberList', () => {
  it('should filter the odd numbers from the list', () => {
    const numbers = [12, 1, 5, 60, 55, 2, 3, 4]

    const result = filterNumberList(numbers)

    expect(result).toEqual([12, 60, 2, 4])
  })
})
