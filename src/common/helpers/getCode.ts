import { randomUUID } from 'crypto';

const getCode = () => {
  return randomUUID().substr(0, 6).toUpperCase();
};

export default getCode;
