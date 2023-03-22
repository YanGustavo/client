export default {
  buttons: {
    primary: {
      color: 'white',
      backgroundColor: '#2d4b2a',
    },
    secondary: {
      color: 'white',
      backgroundColor: '#daa520',
    }  
  },
  buttonSizes: {
    small: {
      fontSize: '15px',
      padding: `7px 15px`,
    },
    medium: {
      fontSize: '18px',
      padding: `9px 20px`,
    },
    large: {
      fontSize: '22px',
      padding: `15px 30px`,
    }
  },
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    radius: '0.4rem',
  },
  box: {
    shadow: '0 8px 8px rgba(0, 0, 0, 0.08)'
  },
  font: {
    family:
      "DIN Next, sans-serif,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxxxsmall: '0.8rem',
      xxxsmall: '1.2rem',
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '2rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4rem',
      xxlarge: '4.8rem',
      xxxlarge: '5.6rem',
      huge: '6.4rem'
    }
  },
  colors: {
  text_color: '#8a9297',
  text_color_rgb: '138, 146, 151',
   heading_color: '#2d4b2a',
   border_color: '#2d4b2a',
  border_color_rgb: '45, 75, 42',
  form_border_color: '#233b21',
  accent_color: '#2d4b2a',
  accent_color_rgb: '45, 75, 42',
  link_color: '#ffffff',
  link_color_hover: '#d9d9d9',
  background: '#35511e',
  background_light: '#9be010',
  background_light_radial: 'radial-gradient(#e5f89e, #96e001)',
  secondary_background: '#fff',
  secondary_background_rgb: '255, 255, 255',
  accent_background: 'rgba(45, 75, 42, 0.08)',
  input_background: '#fff',
  error_color: '#ff0000',
  error_background: 'rgba(255, 0, 0, 0.07)',
  success_color: '#3D7EC5',
  success_background: 'rgba(112, 214, 239, 0.11)',
  primary_button_background: '#daa520',
  primary_button_background_rgb: '218, 165, 32',
  primary_button_text_color: '#ffffff',
  secondary_button_background: '#daa520',
  secondary_button_background_rgb: '218, 165, 32',
  secondary_button_text_color: '#ffffff',
  tertiary_button_background: '#ff3f40',
  tertiary_button_text_color: '#ffffff',
  header_background: '#eaeaea',
  header_text_color: '#2d5734',
  header_color: '#2d5734',
  header_light_text_color: '#2d5734',
  header_border_color: 'rgba(45, 87, 52, 0.3)',
  header_accent_color: '#2d4b2a',
  footer_background_color: '#2d5734',
  footer_heading_text_color: '#ffffff',
  footer_body_text_color: '#ffffff',
  footer_body_text_color_rgb: '255, 255, 255',
  footer_accent_color: '#00aa00',
  footer_accent_color_rgb: '0, 170, 0',
  footer_border: 'none',
  right_menu_background_rgb: 'rgb(254 242 242)',
  right_menu_background_child_rgb: 'rgb(243 244 246)',
  flickity_arrow_color: '#060a05',
  product_on_sale_accent: '#2d4b2a',
  product_on_sale_accent_rgb: '45, 75, 42',
  product_price_percentage: 'hsl(25, 100%, 94%)',
  cart_img_box: '#00ffc855',
  icons_color_hover: '#0000cd',
    white: '#fff',
    gray_50: '#f0efeb',
    gray_300: '#343a40',
    yellow_300: '#F1C40F',
    purple_100: '#7F57DF',
    purple_300: '#5855E9',
    red_300: '#FF6666',
    black: '#0D0D0D'
  },
  spacings: {
    xxxsmall: '0.8rem',
    xxsmall: '1rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
 
} as const;
