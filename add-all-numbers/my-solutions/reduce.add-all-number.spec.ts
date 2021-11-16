import { getTotalSum } from './for.add-all-numbers'

describe('getTotalSum', () => {
  it('should get numbers sum', () => {
    const total = [1, 3, 3]

    const result = getTotalSum(total)

    const expected = 7
    expect(result).toBe(expected)
  })
})
