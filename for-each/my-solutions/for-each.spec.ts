import { forEach } from './for-each'

describe('forEach', () => {
  it('return function whit value of list.', () => {
    const list = [1, 2, 3, 4]
    let total = 0
    const callback = (x: number) => {
      total += x
    }

    forEach<number>(list, callback)

    expect(total).toBe(10)
  })

  it('return function whit value of list of strings.', () => {
    const list = ['a', 'b', 'c']
    let result = ''
    const callback = (x: string) => {
      result += x
    }

    forEach<string>(list, callback)

    expect(result).toBe('abc')
  })
})
