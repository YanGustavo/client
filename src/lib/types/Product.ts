export interface Product {
  codigo: string;
  slug: string;
  tipo: string;
  descricao: string;
  unidade: string;
  preco: string;
  precoCusto: string;
  pesoLiq: string;
  pesoBruto: string;
  estoqueMinimo: string;
  estoqueMaximo: string | null;
  gtin: string;
  gtinEmbalagem: string;
  descricaoCurta: string;
  descricaoComplementar: string;
  larguraProduto: string;
  alturaProduto: string;
  profundidadeProduto: string;
  unidadeMedida: string;
  dataInclusao: string;
  dataAlteracao: string;
  imageThumbnail: string | null;
  nomeFornecedor: string;
  marca: string;
  class_fiscal: string;
  cest: string;
  origem: string;
  idGrupoProduto: string;
  linkExterno: string;
  observacoes: string;
  grupoProduto: string;
  itensPorCaixa: number;
  volumes: number;
  urlVideo: string;
  localizacao: string;
  crossdocking: string;
  garantia: number;
  condicao: string;
  freteGratis: string;
  producao: string;
  dataValidade: string;
  descricaoFornecedor: string;
  variations: {
    tipo: string;
    valor: string;
    sku: string;
    imagem: string;
    estoque: number;
  }[];
  imagem: {
    link: string;
    validade: string;
    tipoArmazenamento: string;
  }[];
  produtoLoja: {
    preco: {
      preco: number;
      precoPromocional: number;
    };
    categoria: {
      id: string;
      descricao: string;
      idCategoriaPai: string;
    }[];
  };
  codigopai: string;
  estoqueAtual: number;
  depositos: {
    deposito: {
      id: string;
      nome: string;
      saldo: string;
    };
  }[];
}

export interface Return {
  products: {
    product: Product;
  }[];
}

export interface ApiResponse {
  retorno: Return;
}