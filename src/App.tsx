import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import Cookie from './Cookie';
import Roading from './Roading';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Roading />}>
        <Cookie />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
