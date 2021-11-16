import { getTotalSum } from './for.add-all-numbers'

describe('getTotalSum', () => {
  it('should get numbers sum', () => {
    const total = [50, 3, 50]

    const result = getTotalSum(total)

    expect(result).toBe(103)
  })
})
