import { Suspense } from 'react';
import Loading from 'components/Loading';


export default function PrivacyPolicyPage() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <p>Privace Policy Pages</p>       
      </Suspense>
    </>
  );
}