export const removeDuplicateByKey = <T>(data: T[], key: keyof T): T[] => {
  const ids = data.map((item) => item[key]);

  const filtered = data.filter(
    (item, index) => !ids.includes(item[key], index + 1),
  );

  return filtered;
};

export const AddOrRemoveValueFromArray = <T>(value: T, array: T[]): T[] => {
  return array.includes(value)
    ? array.filter((item) => item !== value)
    : [...array, value];
};

export const AddOrRemoveValueFromArarysByKey = <T>(
  value: T,
  array: T[],
  key: keyof T,
): T[] => {
  return array.some((item) => item[key] === value[key])
    ? array.filter((item) => item[key] !== value[key])
    : [...array, value];
};
