/**
 * This method generate a string that changes every new rendering
 * @param prefix String
 * @param size Number
 * @returns String
 */
export const generateMutableString = (prefix = 'prefix', size = 9) => {
  return `${prefix}${Math.random().toFixed(size).replace('.', '')}`
}
