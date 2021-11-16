import { getTotalSum } from './for.add-all-numbers'

describe('getTotalSum', () => {
  it('should get numbers sum', () => {
    const total = [50, 3, 50]

    const result = getTotalSum(total)

    const expected = 103
    expect(result).toBe(expected)
  })
})
