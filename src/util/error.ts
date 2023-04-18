import { isAxiosError } from 'axios';

export const handleRequestError = (error: any, customMsg: string = ''): string => {
  if (isAxiosError(error)) {
    const errorList = error?.response?.data?.message;

    let msg = errorList;
    if (typeof errorList === 'object') {
      msg = errorList[0];
    }
    return `${customMsg} ${msg || ''}`;
  }

  return `${customMsg || 'Error'}`;
};
