import { getAlphabeticalEvenNumber } from './alphabetical'

describe('getAlphabeticalEvenNumber', () => {
  it('should return an alphabetically ordered list', () => {
    const list = ['o', 'a', 'i', 'e', 'u']

    getAlphabeticalEvenNumber(list)

    expect(list).toEqual(['a', 'e', 'i', 'o', 'u'])
  })

  it('should return the list sorted alphabetically with more than one character', () => {
    const list = ['Cantabria', 'barcelona', 'Alicante', 'zaragoza']

    getAlphabeticalEvenNumber(list)

    expect(list).toEqual(['Alicante', 'barcelona', 'Cantabria', 'zaragoza'])
  })

  it('should return the list sorted alphabetically with more than one character', () => {
    const list = ['Cantabria', 'barcelona', 'Alicante', 'zaragoza', 'Valencia', 'huesca']

    getAlphabeticalEvenNumber(list)

    expect(list).toEqual(['Alicante', 'barcelona', 'Cantabria', 'huesca', 'Valencia', 'zaragoza'])
  })
})
