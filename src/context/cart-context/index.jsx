import create from "zustand";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import { toast } from 'react-toastify';
import { Products, findProductBySku } from 'lib/Products';

const initialCartState = {
  items: [],
  subtotal: 0,
  totalItems: 0, // adicionar esta variável
  shippingAddress: {
    street: "",
    city: "",
    state: "",
    zipCode: "",
    latitude: null,
    longitude: null,
  },
  paymentMethod: null,
};
const initializeCart = () => {
  try {
    const cart = window.localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : initialCartState;
  } catch (error) {
    console.error("Error parsing cart JSON:", error);
    return initialCartState;
  }
};
const useCartStore = create((set) => ({
  cart: initializeCart(),  
  addToCart: async (sku, qty) => {
    console.log("sku"+sku+"qty"+qty);
    try {
      const [productName, productVariation] =  findProductBySku(Products, sku);
      if (productName === undefined || productName.length === 0) {
        toast.error('Não foi possível inserir seu produto ao carrinho!, produto não encontrado!'+"Codigo do Produto"+sku+"Quantidade:"+qty);
        return;
      } 

      set((state) => {
        const items = Array.isArray(state.cart.items) ? [...state.cart.items] : [];
        const existingItemIndex = items.findIndex(item => item.sku === productVariation.sku);
        if (existingItemIndex > -1) {
          items[existingItemIndex].quantity = qty;
        } else {          
         // const selectedImages = product[0].variations[0].image.filter(image => image.someProperty === someValue);

         // console.log("images"+selectedImage);
          items.push({
            sku: productVariation.sku,
            name: productName,
            image: productVariation.image, //selectedImage.link,
            price: productVariation.price,
            stock: productVariation.stock,
            quantity: qty,
          });
          
        }
        const totalItems = state.cart.totalItems + 1; // atualiza o número total de itens
        const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
        const cart = { ...state.cart, items, totalItems, subtotal };
        window.localStorage.setItem("cart", JSON.stringify(cart));
        //Cookies.set('cart', cart);
        return { cart };
      });
  
      toast.success('Inserimos seu produto ao carrinho!');
    } catch (error) {
      console.error(error);
      toast.error('Não foi possível inserir seu produto ao carrinho!');
      return { cart: initialCartState };
    }
  },

  
  getItemsBySku: (sku) => {
    const items = get().cart.items;
    return items.filter(item => item.sku === sku);
  },

  removeFromCart: (sku) => {
    set((state) => {
      const totalItems = state.cart.totalItems -1; // atualiza o número total de itens
      const items = state.cart.items.filter(item => item.sku !== sku);
      const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);      
      const cart = { ...state.cart, items, totalItems, subtotal };
      window.localStorage.setItem("cart", JSON.stringify(cart));
      //Cookies.set("cart", cart);
      toast.info('Removemos seu produto ao carrinho!');
      return { cart };
    });
  },

  setShippingAddress: (address) => {
    set((state) => {
      const cart = { ...state.cart, shippingAddress: address };
      window.localStorage.setItem("cart", JSON.stringify(cart));
      //Cookies.set("cart", cart);
      return { cart };
    });
  },

  setPaymentMethod: (method) => {
    set((state) => {
      const cart = { ...state.cart, paymentMethod: method };
      window.localStorage.setItem("cart", JSON.stringify(cart));
      //Cookies.set("cart", cart);
      return { cart };
    });
  },

  clearCart: () => {
    set(() => {
      localStorage.removeItem("cart");
     // Cookies.remove("cart");
      return { cart: initialCartState };
    });
  },
}));

export { useCartStore };
