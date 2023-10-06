import { create } from 'zustand';
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import { toast } from 'react-toastify';

//hooks
import useProduct from 'hooks/useProduct';

const initialCartState = {
  items: [],
  subtotal: 0,
  totalItems: 0,
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
    if (typeof window !== 'undefined') {
      const cart = window.localStorage.getItem("cart");
      return cart ? JSON.parse(cart) : initialCartState;
    }
  } catch (error) {
    console.error("Error parsing cart JSON:", error);
  }
  return initialCartState;
};

const findVariationBySKU = (variations, sku) => {
  for (const variation of variations) {
    for (const option of variation.options) {
      if (option.sku === sku) {
        return option;
      }
    }
  }
  return null;
};

const useCartStore = create((set) => ({
  cart: initializeCart(),
  addToCart: async (sku, qty, findProductBySKU) => {
    try {
      const products = await findProductBySKU(sku);
      if (products.length === 0) {
        toast.error(
          'Não foi possível inserir seu produto ao carrinho! Produto não encontrado! Código do Produto: ' +
            sku +
            ' Quantidade: ' +
            qty
        );
        return;
      }

      const product = products[0];
      const { variations } = product;
      const productVariation = findVariationBySKU(variations, sku);

      if (!productVariation) {
        toast.error(
          'Não foi possível inserir seu produto ao carrinho! Variação não encontrada! Código do Produto: ' +
            sku +
            ' Quantidade: ' +
            qty
        );
        return;
      }

      set((state) => {
        const items = Array.isArray(state.cart.items) ? [...state.cart.items] : [];
        const existingItem = items.find((item) => item.sku === productVariation.sku);

        if (existingItem) {
          const newQuantity = existingItem.quantity + qty;
          if (newQuantity > productVariation.stock) {
            toast.error(
              'Não há estoque suficiente para adicionar a quantidade solicitada! Código do Produto: ' +
                sku +
                ' Quantidade disponível: ' +
                productVariation.stock
            );
            return state;
          }
          existingItem.quantity = newQuantity;
        } else {
          if (qty > productVariation.stock) {
            toast.error(
              'Não há estoque suficiente para adicionar a quantidade solicitada! Código do Produto: ' +
                sku +
                ' Quantidade disponível: ' +
                productVariation.stock
            );
            return state;
          }
  //         const optionValue = productVariation.productOptions
  // .map((option) => option.value)
  // .join(" - ");

          items.push({
            id: uuidv4(),
            sku: productVariation.sku,
            name: product.name,
            image: productVariation.images.map((image) => image.link),
            price: parseFloat(productVariation.price),
            stock: productVariation.stock,
            quantity: qty,
          });
        }

        const totalItems = state.cart.totalItems + qty;
        const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
        const cart = { ...state.cart, items, totalItems, subtotal };
        window.localStorage.setItem('cart', JSON.stringify(cart));
        return { cart };
      });

      toast.success('Inserimos seu produto ao carrinho, Yan!');
    } catch (error) {
      console.error(error);
      toast.error('Não foi possível inserir seu produto ao carrinho!');
      return { cart: initialCartState };
    }
  },
  removeFromCart: (sku) => {
    set((state) => {
      const items = state.cart.items.filter((item) => item.sku !== sku);
      const totalItems = items.reduce((total, item) => total + item.quantity, 0);
      const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
      const cart = { ...state.cart, items, totalItems, subtotal };
      window.localStorage.setItem('cart', JSON.stringify(cart));
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
      window.localStorage.removeItem("cart");
      // Cookies.remove("cart");
      return { cart: initialCartState };
    });
  },
}));

export { useCartStore };
