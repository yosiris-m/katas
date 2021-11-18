export function fruitCount(fruits: string[]): Record<string, number> {
  const result: Record<string, number> = {}

  for (let fruit of fruits) {
    let count = 0
    for (const fruit1 of fruits) {
      if (fruit === fruit1) {
        count++
      }
    }
    result[fruit] = count
  }
  return result
}
