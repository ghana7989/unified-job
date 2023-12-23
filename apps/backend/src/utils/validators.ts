import { isValidPhoneNumber } from 'libphonenumber-js';

export const isPhoneNumberValid = (number: string) => {
  return !!number && true;
  // return isValidPhoneNumber(number);
};

export const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};
