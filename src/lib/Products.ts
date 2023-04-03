import {Product} from "lib/types/Product";

const Products: Product[] = [{
  codigo: 'IP8PLUS',
  slug: 'iphone-8-plus',
  tipo: 'Celular',
  descricao: 'iPhone 8 Plus',
  unidade: 'un',
  preco: '4999.99',
  precoCusto: '3500.00',
  pesoLiq: '0.202',
  pesoBruto: '0.500',
  estoqueMinimo: '10',
  estoqueMaximo: '50',
  gtin: '190198455947',
  gtinEmbalagem: '190198455930',
  descricaoCurta: 'iPhone 8 Plus 64GB Tela 5.5"',
  descricaoComplementar:
  `
 <div>
<h1>Descrição2</h1>
 <p>O Samsung Galaxy S21 é um dos modelos de smartphones da Samsung lançados em 2021.</p>
 <img src="https://images.unsplash.com/photo-1611065551055-c238ef6b68d3" alt="Samsung Galaxy S21" width="500"/>
  <p>Ele possui uma tela Dynamic AMOLED 2X de 6.2 polegadas com resolução de 2400 x 1080 pixels.</p>
   <img src="https://images.unsplash.com/photo-1608288948678-19b43089c7e2" alt="Tela do Samsung Galaxy S21" width="500"/>
 <p>O Samsung Galaxy S21 vem com o processador Exynos 2100 ou Snapdragon 888, dependendo do mercado, que proporciona desempenho rápido e eficiente.</p>
 <img src="https://images.unsplash.com/photo-1611065550946-9f287ef4d4f4" alt="Processador do Samsung Galaxy S21" width="500"/>
 <p>Ele conta ainda com uma câmera tripla de 12 megapixels, com aberturas f/1.8, f/2.2 e f/1.9, além de gravação de vídeo em 8K.</p>
  <img src="https://images.unsplash.com/photo-1611065550629-56c15688c537" alt="Câmera do Samsung Galaxy S21" width="500"/>
  <p>O Samsung Galaxy S21 também é resistente à água e poeira, com certificação IP68.</p>
  <img src="https://images.unsplash.com/photo-1610865193146-cf7997926d71" alt="Resistência à água e poeira do Samsung Galaxy S21" width="500"/>
  </div>
  `,
  larguraProduto: '7.81',
  alturaProduto: '15.84',
  profundidadeProduto: '0.73',
  unidadeMedida: 'cm',
  dataInclusao: '2022-03-28T00:00:00',
  dataAlteracao: '2022-03-28T00:00:00',
  imageThumbnail: 'images/5.png',
  nomeFornecedor: 'Apple Inc.',
  marca: 'Apple',
  class_fiscal: '85171210',
  cest: '2010400',
  origem: '0',
  idGrupoProduto: '1',
  linkExterno: 'https://www.apple.com/br/iphone-8/',
  observacoes: 'Produto importado.',
  grupoProduto: 'Eletrônicos',
  itensPorCaixa: 10,
  volumes: 1,
  urlVideo: 'https://www.youtube.com/watch?v=5XeuuVx_9Ws',
  localizacao: 'Prateleira 3',
  crossdocking: '0',
  garantia: 12,
  condicao: 'Novo',
  freteGratis: '0',
  producao: '2021-12-01',
  dataValidade: '2024-03-01',
  descricaoFornecedor:
    'O iPhone 8 Plus é uma evolução do iPhone 7 Plus, que já era excelente. Com design renovado, a nova versão conta com o vidro traseiro, que possibilita o carregamento sem fio, e um processador ainda mais rápido, o A11 Bionic. Além disso, a câmera dupla de 12MP agora possui estabilização óptica em ambas as lentes e um novo modo Retrato com iluminação de palco. Tudo isso em uma tela Retina HD de 5.5" com tecnologia True Tone e HDR.',
  variations: [{
    tipo: 'Cor',
    valor: 'Prata',
    sku: 'IP8PLUS-PRATA',
    imagem: 'images/7.png',
    estoque: 30,
    },
    {
    tipo: 'Cor',
    valor: 'Cinza-espacial',
    sku: 'IP8PLUS-CINZA',
    imagem: 'images/8.png',
    estoque: 20,
    },
    {
    tipo: 'Cor',
    valor: 'Dourado',
    sku: 'IP8PLUS-DOURADO',
    imagem: 'images/9.png',
    estoque: 15,
    }
    ],
    imagem: [
      {
      link:
      'images/1.png',
      validade: '2024-03-01',
      tipoArmazenamento: 'cloud',
      },
      {
      link:
      'images/2.png',
      validade: '2024-03-01',
      tipoArmazenamento: 'cloud',
      },
      {
      link:
      'images/3.png',
      validade: '2024-03-01',
      tipoArmazenamento: 'cloud',
      },
      {
      link:
      'images/4.png',
      validade: '2024-03-01',
      tipoArmazenamento: 'cloud',
      },
      ],
      produtoLoja: {
      preco: {
      preco: 4999.99,
      precoPromocional: 0,
      },
      categoria: [
      {
      id: '1',
      descricao: 'Eletrônicos',
      idCategoriaPai: '',
      },
      ],
      },
      codigopai: '',
      estoqueAtual: 65,
      depositos: [
      {
      deposito: {
      id: '01',
      nome: 'Depósito 01',
      saldo: '35',
      },
      },
      {
      deposito: {
      id: '02',
      nome: 'Depósito 02',
      saldo: '30',
      },
      },
      ],
}];
function findProductBySlug(products: Product[], slug: string): Product[] {
  const product = products.find(product => product.slug === slug);
  return product ? [product] : [];
}


export type { Product };
export { Products, findProductBySlug };