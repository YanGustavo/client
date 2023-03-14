//import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import React from "react";
const Loading = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
      <div
        className="spinner-border text-success"
        role="status"
        style={{ width: "50px", height: "50px" }}
      >
        <span className="sr-only">Carregando...</span>
      </div>
    </div>
    {/* <SkeletonTheme baseColor="#202020" highlightColor="#444">
         <p>
            <Skeleton count={3} />
         </p>
     </SkeletonTheme> */}
    </>  
  );
};

export default Loading;
