import { useRecoilState } from 'recoil';
import { cookieState } from './recoil/state';

// const Data = [
//   {
//     id: '2',
//     title: 'title2',
//     contents: 'contents2',
//   },
//   {
//     id: '3',
//     title: 'title3',
//     contents: 'contents3',
//   },
// ];

const Cookie = () => {
  const [cookies, setCookies] = useRecoilState<number>(cookieState);

  const onChange = () => {
    setCookies(cookies + 1);
  };

  // console.log(cookies.count + 1);
  return (
    <div>
      {/* {Data.map((item) => {
        return <button onClick={() => onChange(item)}>{item.title}</button>;
      })} */}

      <span>{cookies}</span>
      <button type="button" onClick={onChange}>
        증가
      </button>
    </div>
  );
};
export default Cookie;
