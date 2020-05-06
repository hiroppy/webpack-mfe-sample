import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';

const Page1 = lazy(() => import('page1/Page'));

const Wrapper = () => (
  <div>
    <Suspense fallback={<span>Loading...</span>}>
      <Page1 />
    </Suspense>
  </div>
);

render(<Wrapper />, document.getElementById('root'));
