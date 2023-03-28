const path = "img/categories/"
interface CategoryItemProps {
  id: number;
  name: string;
  slug: string;
  image: string;
}
const Categories: CategoryItemProps[] = [
  { id: 1, name: 'iPhone', slug: 'iphone', image: `${path}iphone.png` },
  { id: 2, name: 'Xiaomi', slug: 'xiaomi', image: `${path}xiaomi.png` },
  { id: 3, name: 'iPad', slug: 'ipad', image: `${path}ipad.png` },
  { id: 4, name: 'iPod', slug: 'ipod', image: `${path}ipod.png` },
  { id: 5, name: 'Apple Watch', slug: 'apple-watch', image: `${path}apple-watch.png` },
  { id: 6, name: 'Macbook', slug: 'macbook', image: `${path}macbook.png` },
  // adicione mais categorias aqui
];
export {Categories};