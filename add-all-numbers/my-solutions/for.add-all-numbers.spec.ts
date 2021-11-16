import { getTotalSum } from './for.add-all-numbers'

describe('getTotalSum', () => {
  it('should get numbers sum', () => {
    const total = [5, 3, -5]

    const result = getTotalSum(total)

    const expected = 8
    expect(result).toBe(expected)
  })
})
