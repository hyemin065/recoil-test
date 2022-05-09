import { useRecoilState, useRecoilValue } from 'recoil';
import { cookieState, cookieStateSelector, IMovie, moviePageState } from './recoil/state';

const Cookie = () => {
  const [cookies, setCookies] = useRecoilState<IMovie[] | []>(cookieState);
  const [page, setPage] = useRecoilState<number>(moviePageState);

  const cookie = useRecoilValue(cookieStateSelector);
  const onChange = () => {
    setPage(page + 1);
    setCookies(cookie.Search);
  };

  return (
    <div>
      {cookies.map((movie) => {
        return <span key={movie.imdbID}>{movie.Title}</span>;
      })}
      <button type="button" onClick={onChange}>
        영화 타이틀보기
      </button>

      <span>{page}</span>
    </div>
  );
};
export default Cookie;
