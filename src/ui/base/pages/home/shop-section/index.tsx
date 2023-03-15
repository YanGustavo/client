import React from 'react';
//import * as SShopSection from './styles';
import useShopSection from "./useShopSection";

import Card from "ui/base/pages/home/shop-section/components/card";
import Pagination from "components/pagination";
import Loading from "components/Loading";
import Error from "components/Error"
type ShopSectionProps = {
  keyword: string;
  pagenumber: string;
}

const ShopSection = ({keyword, pagenumber}: ShopSectionProps) => {
  const { loading, error, products, page, pages } = useShopSection(keyword, pagenumber);
return (
  <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
               <div className="shopcontainer row">
                {loading && (<div className="mb-5"><Loading /></div>)}
                { error && (<Error variant="alert-danger">{error}</Error>)}
                {(products.length > 0) ? (
                  <>
                    {products.map((product,index) => (
                      <Card key={index} product={product}/>
                    ))} 
                  </>
                ): (
                  <div> Nada Encontrado, Erro no servidor</div>
                )}

                {/* Pagination */}
                <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                />
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
);
}
export default ShopSection;