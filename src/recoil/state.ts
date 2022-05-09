import axios from 'axios';
import { atom, selector } from 'recoil';

export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMovies {
  Search: IMovie[];
  totalResults: number;
  Response: boolean;
}

export const cookieState = atom<IMovie[] | []>({
  key: 'cookieState',
  default: [],
});

export const moviePageState = atom<number>({
  key: 'moviePageState',
  default: 1,
});

export const cookieStateSelector = selector<IMovies>({
  key: 'cookieStateSelector',
  get: async ({ get }) => {
    const page = get(moviePageState);
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=iron&page=${page}`,
    );
    const data = await response.data;
    return data;
  },
  // set: ({ set }, newValue: any) => {
  //   console.log(moviePageState, newValue);
  //   set(moviePageState, newValue);
  // },
});
