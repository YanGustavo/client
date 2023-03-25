import { Suspense } from 'react';
import {Container, ContainerFlush} from "ui/base/menu-right/styles";
import Loading from 'components/Loading';


export default function OrderPage() {
  return (
    <>      
      <Container>
          <ContainerFlush>
          <Suspense fallback={<Loading />}>
        
        <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="px-5 text-left">ID</th>
                  <th className="p-5 text-left">DATE</th>
                  <th className="p-5 text-left">TOTAL</th>
                  <th className="p-5 text-left">PAID</th>
                  <th className="p-5 text-left">DELIVERED</th>
                  <th className="p-5 text-left">ACTION</th>
                </tr>
              </thead>
              <tbody>
                  <tr className="border-b">
                    <td className=" p-5 ">EAI_OR_3405060</td>
                    <td className=" p-5 ">25/10/2023</td>
                    <td className=" p-5 ">$100</td>
                    <td className=" p-5 ">
                      not paid
                    </td>
                    <td className=" p-5 ">
                      not delivered
                    </td>
                    <td className=" p-5 ">
                        <a>Details</a>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>     
        </Suspense>
          </ContainerFlush>
        </Container>
    </>
  );
}