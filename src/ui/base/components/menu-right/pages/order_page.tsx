import { Suspense } from 'react';
import Loading from 'components/Loading';


export default function OrderPage() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <p> Order Page</p>       
      </Suspense>
    </>
  );
}