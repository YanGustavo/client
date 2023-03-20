import React from 'react';
const ShopSection = ({children}: { children: React.ReactNode }) => {  
return (
  <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
               <div className="row">
               {children}
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
);
}
export default ShopSection;