import packageJson from '../../package.json';

const { version } = packageJson;

const uri: { [key: string]: string } = {
  development: 'http://localhost:5000',
  production: 'https://api/eaichefinho.com.br',
  test: 'https://'
};

const NEXT_PUBLIC_NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV;

export { uri, version, NEXT_PUBLIC_NODE_ENV };
