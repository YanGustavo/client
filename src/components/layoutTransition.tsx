export default function LayoutTransition({ children, isPending }) {
  return (
      <section  style={{opacity: isPending ? 0.7 : 1 }}>
      {children}
      </section>
  );
}