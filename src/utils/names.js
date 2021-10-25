import { primes } from '../consts';

export const getShortName = (name) => {
  return name
    .trim()
    .split(' ')
    .reduce((acc, name) => (name.length ? `${acc}${name[0]}` : acc), '')
    .substr(0, 3)
    .toUpperCase();
};

export const getUniqueHashFromName = (name) => {
  const chars = name
    .trim()
    .toUpperCase()
    .split(' ')
    .join('')
    .split('')
    .filter((char) => char >= 'A' && char <= 'Z');

  let rand = 0;
  for (let i = 0; i < chars.length; i++) {
    const index = chars[i].charCodeAt() - 'A'.charCodeAt();
    rand += Math.pow(primes[index], chars.length - i);
  }

  while (rand > 1) {
    rand /= 10;
  }

  return rand;
};
