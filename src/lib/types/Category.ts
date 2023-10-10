interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
    description: string;
    banner: string;
    parentId: string | number;
  }
  
  
  export default Category;
  