import { alphabetical } from './alphabetical'

describe('alphabetical', () => {
  it('Return return the list sorted alphabetically.', () => {
    const list = ['o', 'a', 'i', 'e', 'u']

    alphabetical(list)

    expect(list).toEqual(['a', 'e', 'i', 'o', 'u'])
  })
})
