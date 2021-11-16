import { getTotalSum } from './for.add-all-numbers'

describe('getTotalSum', () => {
  it('should get numbers sum', () => {
    const total = [2, 4, 5]

    const result = getTotalSum(total)

    const expected = 11
    expect(result).toBe(expected)
  })
})
