
export const addDividerElements = <T>(array: Array<T>, divider: T): Array<T> =>
  array.reduce((prev, cur, i, arr) => {
    const isInside = i !== 0 && i !== arr.length;
    const newCur = isInside ? [divider, cur] : [cur];
    return [...prev, ...newCur];
  }, []);
