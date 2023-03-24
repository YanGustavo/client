import { Suspense } from 'react';
import Loading from 'components/Loading';


export default function FavoritePage() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <p> Favorite</p>       
      </Suspense>
    </>
  );
}