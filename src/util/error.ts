import { isAxiosError } from 'axios';

export const handleRequestError = (error: any, customMsg: string = ''): string => {
  if (isAxiosError(error)) {
    const errorList = error?.response?.data?.message;

    let msg = errorList;
    if (typeof errorList === 'object') {
      msg = errorList[0];
    }
    return msg;
  }

  if(error?.message) return error.message;
  
  return `${customMsg || 'Error'}`;
};
