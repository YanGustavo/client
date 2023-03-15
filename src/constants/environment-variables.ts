import packageJson from '../../package.json';

const { version } = packageJson;

const uri: { [key: string]: string } = {
  development: 'http://localhost:5000',
  production: 'https://api/eaichefinho.com.br',
  test: 'https://'
};

const NODE_ENV = process.env.NODE_ENV;

export { uri, version, NODE_ENV };
