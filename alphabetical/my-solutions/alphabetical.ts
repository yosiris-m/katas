export function getAlphabeticalEvenNumber(list: string[]) {
  // return list.sort((a, b) => a.localeCompare(b))

  //new Intl.Collator().compare-----> para un array o matrix grande
  const compare = new Intl.Collator().compare
  return list.sort(compare)
}
