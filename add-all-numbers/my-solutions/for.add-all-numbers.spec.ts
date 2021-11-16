import { getTotalSum } from './for.add-all-numbers'

describe('getTotalSum', () => {
  it('should get numbers sum', () => {
    const total = [2, 3]

    const result = getTotalSum(total)

    const expected = 5
    expect(result).toBe(expected)
  })
})
