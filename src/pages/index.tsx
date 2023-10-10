import React, {Suspense} from 'react';
//error
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from 'components/Error';
//hooks
//Lib
import { Product } from 'lib/types/Product';
//hooks
import useProduct from 'hooks/useProduct';
import useCategories from 'hooks/useCategory';
import useHome from "hooks/useHome";
import useBase from '../templates/base/hooks/useBase';
//component head layout
import Layout from 'components/Layout';
import {Base} from 'templates/base';
//styles
import {Container, Item} from 'templates/base/ui/styles';
//component
import {Tooltip, Drawer } from 'components';
//import Tooltip from '@mui/material/Tooltip';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// Importe o SimpleMenu e MenuItem
import { AppBar, Toolbar, Typography, IconButton, List, ListItem, ListItemText } from '@mui/material';


//Product Preview
import ProductCard from '@/ui/product/product-card';
//Icon

//components
import MenuDropdown from 'ui/menu/MenuDropDown';
//provisorio

interface HomeProps {
  keyword: string;
  pagenumber: string;
}

export default function HomePage({ keyword, pagenumber }: HomeProps) {
  const {menu_left_visible, actions} = useBase();
  const [hashValue, setHashValue] = React.useState('');
  const handleDrawerClose = () => {
    if (menu_left_visible) {
      actions.setMenuLeftHidden(); // Ou a função apropriada para ocultar o menu esquerdo
    }
  };
  const { loading, error, page, pages } = useHome(keyword, pagenumber);
  const { findByCategory} = useProduct();
  //const product = findByCategory('649b36aeba557d01c6db109f');
  //console.log("product category"+ product);
  const products = [
    {
      code: "IP8PLUS",
      slug: "iphone-8-plus",
      store: {
        name: "Eai Chefinho",
        slug: "eaichefinho",
      },
      type: "Celular",
      name: "iPhone 8 Plus",
      unit: "un",
      price: 1650.99,
      costPrice: 3500.0,
      netWeight: 0.202,
      grossWeight: 0.5,
      minimumStock: 10,
      maximumStock: 50,
      gtin: "190198455947",
      gtinPackaging: "190198455930",
      shortDescription: 'iPhone 8 Plus 64GB Tela 5.5"',
      complementaryDescription:
        "O Samsung Galaxy S21 é um dos modelos de smartphones da Samsung lançados em 2021. Ele possui uma tela Dynamic AMOLED 2X de 6.2 polegadas com resolução de 2400 x 1080 pixels. O Samsung Galaxy S21 vem com o processador Exynos 2100 ou Snapdragon 888, dependendo do mercado, que proporciona desempenho rápido e eficiente. Ele conta ainda com uma câmera tripla de 12 megapixels, com aberturas f/1.8, f/2.2 e f/1.9, além de gravação de vídeo em 8K. O Samsung Galaxy S21 também é resistente à água e poeira, com certificação IP68.",
      productWidth: 7.81,
      productHeight: 15.84,
      productDepth: 0.73,
      unitMeasure: "cm",
      inclusionDate: "2022-03-28T00:00:00",
      alterationDate: "2022-03-28T00:00:00",
      imageThumbnail: "https://example.com/images/5.png",
      supplierName: "Apple Inc.",
      brand: "Apple",
      fiscalClassification: "85171210",
      cest: "2010400",
      origin: "0",
      productGroupId: "1",
      externalLink: "https://www.apple.com/br/iphone-8/",
      observations: "Produto importado.",
      productGroup: "Eletrônicos",
      itemsPerBox: 10,
      volumes: 1,
      videoUrl: "https://www.youtube.com/watch?v=5XeuuVx_9Ws",
      location: "Prateleira 3",
      crossDocking: "0",
      warranty: 3,
      condition: "Vitrine",
      freeShipping: "0",
      production: "2021-12-01",
      expirationDate: "2024-03-01",
      supplierDescription:
        'O iPhone 8 Plus é uma evolução do iPhone 7 Plus, que já era excelente. Com design renovado, a nova versão conta com o vidro traseiro, que possibilita o carregamento sem fio, e um processador ainda mais rápido, o A11 Bionic. Além disso, a câmera dupla de 12MP agora possui estabilização óptica em ambas as lentes e um novo modo Retrato com iluminação de palco. Tudo isso em uma tela Retina HD de 5.5" com tecnologia True Tone e HDR.',
        variations: [
          {
            key: "Capacidade",
            value: "64 GB",
            options: [
              {
                value: "Prata",
                images: [
                  { link: "v1689082243/products/cellphones/iphone/8%20Plus/1all_mujkae.png" },
                  { link: "/images/2.png" },
                  { link: "/images/3.png" },
                  { link: "/images/4.png" },
                ],
                sku: "IP8PLUS-PRATA",
                stock: 7,
                price: "950",
              },
              {
                value: "Cinza-espacial",
                images: [
                  { link: "/images/5.png" },
                  { link: "/images/6.png" },
                  { link: "/images/7.png" },
                ],
                sku: "IP8PLUS-CINZA",
                stock: 9,
                price: "890",
              },
              {
                value: "Dourado",
                images: [
                  { link: "/images/9.png" },
                  { link: "/images/10.png" },
                ],
                sku: "IP8PLUS-DOURADO",
                stock: 5,
                price: "2050",
              },
            ],
          },
          {
            key: "Capacidade",
            value: "128 GB",
            options: [
              {
                value: "Verde",
                images: [
                  { link: "v1689082243/products/cellphones/iphone/8%20Plus/1all_mujkae.png" },
                ],
                sku: "IP8PLUS-PRATA",
                stock: 7,
                price: "748",
              },
              {
                value: "Pink",
                images: [
                  { link: "/images/5.png" },
                  { link: "/images/6.png" },
                ],
                sku: "IP8PLUS-CINZA",
                stock: 9,
                price: "858",
              },
              {
                value: "Ouro",
                images: [
                  { link: "/images/9.png" },
                  { link: "/images/10.png" },
                  { link: "/images/11.png" },
                  { link: "/images/12.png" },
                ],
                sku: "IP8PLUS-DOURADO",
                stock: 5,
                price: "908",
              },
            ],
          },
          // Outras capacidades...
        ],
      storeProduct: {
        price: {
          price: 4999.99,
          promotionalPrice: 4899.99,
        },
        category: "649b36aeba557d01c6db109f",
      },
      //parentCode: '', // Empty string as parentCode
      currentStock: 65,
      deposits: ["64a6f2ffa550782ed5057395"],
    },
  ];
  
  //const { categories } = useCategories();
  const categories = [
    {
      _id: "649b36aeba557d01c6db109b",
      name: "Celulares",
      slug: 'celulares',
      image: "",
      description: "Descubra o poder da tecnologia na palma da sua mão com os nossos incríveis celulares...",
      banner: '',
      parentId: 0,
    },
    {
      _id: "649b36aeba557d01c6db10a4", // Moda Feminina
      name: "Moda Feminina",
      slug: 'moda-feminina',
      image: "",
      description: "Descrição da Moda Feminina",
      banner: '',
      parentId: 0,
    },
    {
      _id: "649b36aeba557d01c6db10a5", // Moda Infantil
      name: "Moda Infantil",
      slug: 'moda-infantil',
      image: "",
      description: "Descrição da Moda Infantil",
      banner: '',
      parentId: 0,
    },
    {
      _id: "649b36aeba557d01c6db10a6", // Filho de Moda Feminina
      name: "Short",
      slug: 'short',
      image: "",
      description: "Descrição do Short",
      banner: '',
      parentId: "649b36aeba557d01c6db10a4",
    },
    {
      _id: "649b36aeba557d01c6db10a7", // Filho de Moda Feminina
      name: "Blusas",
      slug: 'blusas',
      image: "",
      description: "Descrição de Blusas",
      banner: '',
      parentId: "649b36aeba557d01c6db10a4",
    },
    // Novas categorias e filhos
    {
      _id: "649b36aeba557d01c6db10a8",
      name: "Eletrônicos",
      slug: 'eletronicos',
      image: "",
      description: "Descrição de Eletrônicos",
      banner: '',
      parentId: 0,
    },
    {
      _id: "649b36aeba557d01c6db10a9", // Filho de Eletrônicos
      name: "Smartphones",
      slug: 'smartphones',
      image: "",
      description: "Descrição de Smartphones",
      banner: '',
      parentId: "649b36aeba557d01c6db10a8",
    },
    {
      _id: "649b36aeba557d01c6db10aa", // Filho de Eletrônicos
      name: "Laptops",
      slug: 'laptops',
      image: "",
      description: "Descrição de Laptops",
      banner: '',
      parentId: "649b36aeba557d01c6db10a8",
    },
    // Outras categorias e filhos aqui...
  ];
  
  
  

  React.useEffect(() => {
    // Verifica se estamos no ambiente do navegador (cliente) antes de tentar acessar a localização.
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substr(1); // Pega a parte após o '#'.
      setHashValue(hash); // Armazena o valor em um estado ou variável.
    }
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
            <Drawer open={menu_left_visible} onClose={handleDrawerClose}>
              <MenuDropdown categories={categories} />
              <p>Valor após o '#': {hashValue}</p>
            </Drawer>
            <Container>
            <Item>
  {Array.isArray(products) && products.length > 0 ? (
                    products.map((product) => (
      <ProductCard
        product={product}
        top={
          <ProductCard.Top>
            <ProductCard.Image />
          </ProductCard.Top>
        }
        center={
          <ProductCard.Center>
            <ProductCard.Variant />
          </ProductCard.Center>
        }
        bottom={
          <ProductCard.Bottom>
            <ProductCard.Left>
              <ProductCard.Details>
                <ProductCard.Title />
                <ProductCard.VariantTitle />
                <ProductCard.Price />
              </ProductCard.Details>
              <ProductCard.BuyButton>
                <i>
                  <Tooltip title={'Adicionar ao Carrinho'}>
                    <AddShoppingCartIcon />
                  </Tooltip>
                </i>
              </ProductCard.BuyButton>
            </ProductCard.Left>
            <ProductCard.Right>
              <ProductCard.Done className={'done'} />
              <ProductCard.RightDetails>
                <ProductCard.Title />
                <p>Adicionado ao Carrinho</p>
              </ProductCard.RightDetails>
              <ProductCard.Remove className={'remove'} />
            </ProductCard.Right>
          </ProductCard.Bottom>
        }
        inside={
          <ProductCard.Inside>
            <ProductCard.ShortDescription />
          </ProductCard.Inside>
        }
      />
      ))
      ) : (
        <p>No products available</p>
      )}
</Item>

  
<Item>
  {Array.isArray(products) && products.length > 0 ? (
                    products.map((product) => (
      <ProductCard
        product={product}
        top={
          <ProductCard.Top>
            <ProductCard.Image />
          </ProductCard.Top>
        }
        center={
          <ProductCard.Center>
            <ProductCard.Variant />
          </ProductCard.Center>
        }
        bottom={
          <ProductCard.Bottom>
            <ProductCard.Left>
              <ProductCard.Details>
                <ProductCard.Title />
                <ProductCard.VariantTitle />
                <ProductCard.Price />
              </ProductCard.Details>
              <ProductCard.BuyButton>
                <i>
                  <Tooltip title={'Adicionar ao Carrinho'}>
                    <AddShoppingCartIcon />
                  </Tooltip>
                </i>
              </ProductCard.BuyButton>
            </ProductCard.Left>
            <ProductCard.Right>
              <ProductCard.Done className={'done'} />
              <ProductCard.RightDetails>
                <ProductCard.Title />
                <p>Adicionado ao Carrinho</p>
              </ProductCard.RightDetails>
              <ProductCard.Remove className={'remove'} />
            </ProductCard.Right>
          </ProductCard.Bottom>
        }
        inside={
          <ProductCard.Inside>
            <ProductCard.ShortDescription />
          </ProductCard.Inside>
        }
      />
      ))
      ) : (
        <p>No products available</p>
      )}
</Item>        <Item>
  {Array.isArray(products) && products.length > 0 ? (
                    products.map((product) => (
      <ProductCard
        product={product}
        top={
          <ProductCard.Top>
            <ProductCard.Image />
          </ProductCard.Top>
        }
        center={
          <ProductCard.Center>
            <ProductCard.Variant />
          </ProductCard.Center>
        }
        bottom={
          <ProductCard.Bottom>
            <ProductCard.Left>
              <ProductCard.Details>
                <ProductCard.Title />
                <ProductCard.VariantTitle />
                <ProductCard.Price />
              </ProductCard.Details>
              <ProductCard.BuyButton>
                <i>
                  <Tooltip title={'Adicionar ao Carrinho'}>
                    <AddShoppingCartIcon />
                  </Tooltip>
                </i>
              </ProductCard.BuyButton>
            </ProductCard.Left>
            <ProductCard.Right>
              <ProductCard.Done className={'done'} />
              <ProductCard.RightDetails>
                <ProductCard.Title />
                <p>Adicionado ao Carrinho</p>
              </ProductCard.RightDetails>
              <ProductCard.Remove className={'remove'} />
            </ProductCard.Right>
          </ProductCard.Bottom>
        }
        inside={
          <ProductCard.Inside>
            <ProductCard.ShortDescription />
          </ProductCard.Inside>
        }
      />
      ))
      ) : (
        <p>No products available</p>
      )}
</Item>        <Item>
  {Array.isArray(products) && products.length > 0 ? (
                    products.map((product) => (
      <ProductCard
        product={product}
        top={
          <ProductCard.Top>
            <ProductCard.Image />
          </ProductCard.Top>
        }
        center={
          <ProductCard.Center>
            <ProductCard.Variant />
          </ProductCard.Center>
        }
        bottom={
          <ProductCard.Bottom>
            <ProductCard.Left>
              <ProductCard.Details>
                <ProductCard.Title />
                <ProductCard.VariantTitle />
                <ProductCard.Price />
              </ProductCard.Details>
              <ProductCard.BuyButton>
                <i>
                  <Tooltip title={'Adicionar ao Carrinho'}>
                    <AddShoppingCartIcon />
                  </Tooltip>
                </i>
              </ProductCard.BuyButton>
            </ProductCard.Left>
            <ProductCard.Right>
              <ProductCard.Done className={'done'} />
              <ProductCard.RightDetails>
                <ProductCard.Title />
                <p>Adicionado ao Carrinho</p>
              </ProductCard.RightDetails>
              <ProductCard.Remove className={'remove'} />
            </ProductCard.Right>
          </ProductCard.Bottom>
        }
        inside={
          <ProductCard.Inside>
            <ProductCard.ShortDescription />
          </ProductCard.Inside>
        }
      />
      ))
      ) : (
        <p>No products available</p>
      )}
</Item>        <Item>
  {Array.isArray(products) && products.length > 0 ? (
                    products.map((product) => (
      <ProductCard
        product={product}
        top={
          <ProductCard.Top>
            <ProductCard.Image />
          </ProductCard.Top>
        }
        center={
          <ProductCard.Center>
            <ProductCard.Variant />
          </ProductCard.Center>
        }
        bottom={
          <ProductCard.Bottom>
            <ProductCard.Left>
              <ProductCard.Details>
                <ProductCard.Title />
                <ProductCard.VariantTitle />
                <ProductCard.Price />
              </ProductCard.Details>
              <ProductCard.BuyButton>
                <i>
                  <Tooltip title={'Adicionar ao Carrinho'}>
                    <AddShoppingCartIcon />
                  </Tooltip>
                </i>
              </ProductCard.BuyButton>
            </ProductCard.Left>
            <ProductCard.Right>
              <ProductCard.Done className={'done'} />
              <ProductCard.RightDetails>
                <ProductCard.Title />
                <p>Adicionado ao Carrinho</p>
              </ProductCard.RightDetails>
              <ProductCard.Remove className={'remove'} />
            </ProductCard.Right>
          </ProductCard.Bottom>
        }
        inside={
          <ProductCard.Inside>
            <ProductCard.ShortDescription />
          </ProductCard.Inside>
        }
      />
      ))
      ) : (
        <p>No products available</p>
      )}
</Item>
  
              {/* Adicione mais contêineres conforme necessário */}
            </Container>
            {/* end content */}
          </ErrorBoundary>
        </Container>
      </Base>
    </Layout>
  );
}