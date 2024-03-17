export function removeDuplicates<T>(arr: T[]): T[] {
  if (arr) {
    return arr.filter((el, i) => arr.indexOf(el) === i);
  } else return [];
}
