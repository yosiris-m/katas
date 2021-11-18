import { fruitCount } from './fruit-count'

describe('fruitCount', () => {
  it('Return an object whose keys are the unique elements and the value is the count of each repeated element.', () => {
    const listFruit = ['🍋', '🍉', '🍒', '🍋', '🍉', '🍋', '🍉', '🍒', '🍉', '🍉']

    const result = fruitCount(listFruit)

    expect(result).toEqual({
      '🍋': 3,
      '🍉': 5,
      '🍒': 2
    })
  })
})
