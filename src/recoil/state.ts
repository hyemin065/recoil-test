import { atom } from 'recoil';

export const cookieState = atom<number>({
  key: 'cookieState',
  default: 1,
});
