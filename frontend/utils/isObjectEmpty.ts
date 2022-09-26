export const isObjectEmpty = <T = Record<string, unknown>>(obj: T): boolean => {

  return Object.keys(obj).length === 0;
};
