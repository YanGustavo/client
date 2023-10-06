import React, {Suspense} from 'react';
//error
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from 'components/Error';
//hooks
//Lib
import { Product } from 'lib/types/Product';
//hooks
import useProduct from 'hooks/useProduct';
import useHome from "hooks/useHome";
import useBase from '../templates/base/hooks/useBase';
//component head layout
import Layout from 'components/Layout';
import {Base} from 'templates/base';
//styles
import {Container} from 'templates/base/ui/styles';
//component
import {Tooltip, Drawer } from 'components';
// Importe o SimpleMenu e MenuItem
import { AppBar, Toolbar, Typography, IconButton, List, ListItem, ListItemText } from '@mui/material';

// Importe o componente Link
import Link from 'next/link';
//Product Preview
import ProductCard from '@/ui/product/product-card';
//Icon
import HomeRounded from "@mui/icons-material/HomeRounded";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface HomeProps {
  keyword: string;
  pagenumber: string;
}

export default function HomePage({ keyword, pagenumber }: HomeProps) {
  const { loading, error, products, page, pages } = useHome(keyword, pagenumber);
  const {menu_left_visible, actions} = useBase();
  const handleDrawerClose = () => {
    if (menu_left_visible) {
      actions.setMenuLeftHidden(); // Ou a função apropriada para ocultar o menu esquerdo
    }
  };
  // const menuItems = [
  //   { text: 'Home', path: '/' },
  //   { text: 'Shorts', path: '/shorts' },
  //   { text: 'Blusas', path: '/blusas' },
  //   { text: 'Vestidos', path: '/vestidos' },
  // ];

  // const list = (
  //   <List>
  //     {menuItems.map((item) => (
  //       <ListItem key={item.text} button component={Link} to={item.path}>
  //         <ListItemText primary={item.text} />
  //       </ListItem>
  //     ))}
  //   </List>
  // );
//Product
const { findProductBySlug} = useProduct();
const [data, setData] = React.useState<Product | null>(null);
React.useEffect(() => {
  const fetchData = async () => {
    const result: Product[] = await findProductBySlug("iphone-8-plus");
    setData(result[0]);       
  };

  fetchData();
}, []);
  return (
    <Layout title="">
      <Base>
        <Container>
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
            )}
          >
            {/* start content */}
            <Drawer open={menu_left_visible} onClose={handleDrawerClose} position="left">
           {/* {list} */}
            </Drawer>
          
            {/* end content */}
          </ErrorBoundary>
        </Container>
      </Base>
    </Layout>
  );
}
