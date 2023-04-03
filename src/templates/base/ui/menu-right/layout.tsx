'use client'
import {Layout} from './styles';
export default function LayoutTransition({ children, isPending }) {
  return (
      <section  style={{opacity: isPending ? 0.4 : 1 }}>
        <Layout>
          {children}
        </Layout>      
      </section>
  );
}