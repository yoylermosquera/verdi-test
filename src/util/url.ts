export const createQueryParamsFromObject = (object: object) => {
    return Object.entries(object)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
  }
  