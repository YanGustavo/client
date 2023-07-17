export default {
  slug:"eaichefinho",
  name: 'Eai Chefinho',
  logo: 'https://res.cloudinary.com/dsbs4fx60/image/upload/v1687307070/brand/logo_site_dyapcg.png',
  icon: 'https://res.cloudinary.com/dsbs4fx60/image/upload/v1687307070/brand/favicon_krjret.png',
  slogan:
    'Eai Chefinho: O seu portal para dicas, truques e conselhos de sucesso na vida e no trabalho!',
  language: 'pt',
  address: {
    street: 'Rua 3, casa 13 - Res. Tambaú',
    city: 'Paço do Lumiar',
    state: 'Maranhão',
    country: 'Brasil',
    postalCode: '65130-000'
  },
  contact: {
    phone: '(98) 98542-8872',
    email: 'atendimento@eaichefinho.com.br',
    url: 'www.eaichefinho.com.br'
  },
  desing: {
    buttons: {
      primary: {
        color: 'white',
        backgroundColor: '#2d4b2a'
      },
      secondary: {
        color: 'white',
        backgroundColor: '#daa520'
      },
      tertiary: {
        color: '#ffffff',
        backgroundColor: '#ff3f40'
      }
    },
    buttonSizes: {
      small: {
        fontSize: '15px',
        padding: '7px 15px'
      },
      medium: {
        fontSize: '18px',
        padding: '9px 20px'
      },
      large: {
        fontSize: '22px',
        padding: '15px 30px'
      }
    },
    grid: {
      container: '130rem',
      gutter: '3.2rem'
    },
    border: {
      radius: '0.4rem',
      color: '#2d4b2a',
      colorRGB: '45, 75, 42',
      formColor: '#233b21'
    },
    box: {
      shadow: '0 8px 8px rgba(0, 0, 0, 0.08)'
    },
    font: {
      family:
        'DIN Next, sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      light: 300,
      normal: 400,
      bold: 600,
      sizes: {
        xxxsmall: '0.6rem',
        xxsmall: '0.7rem',
        xsmall: '0.9rem',
        small: '1rem',
        medium: '1.2rem',
        large: '1.3rem',
        xlarge: '1.4rem',
        xxlarge: '1.8rem',
        xxxlarge: '2rem',
        huge: '2.5rem'
      }
    },
    colors: {
      placeholder: '#2d4b2a',
      text: {
        default: '#8a9297',
        rgb: '138, 146, 151'
      },
      heading: '#2d4b2a',
      success: {
        color: '#3D7EC5',
        background: 'rgba(112, 214, 239, 0.11)'
      },
      error: {
        color: '#ff0000',
        background: 'rgba(255, 0, 0, 0.07)'
      },
      link: {
        default: '#ffffff',
        hover: '#d9d9d9'
      },
      background: {
        default: '#35511e',
        light: '#9be010',
        lightRadial: 'radial-gradient(#e5f89e, #96e001)'
      },
      secondaryBackground: {
        default: '#fff',
        rgb: '255, 255, 255'
      },
      accentBackground: 'rgba(45, 75, 42, 0.08)',
      inputBackground: '#fff',
      primaryButton: {
        background: '#daa520',
        backgroundRGB: '218, 165, 32',
        textColor: '#ffffff',
        backgroundHover: '#daa520'
      },
      secondaryButton: {
        background: '#daa520',
        backgroundRGB: '218, 165, 32',
        textColor: '#ffffff',
        backgroundHover: '#daa520'
      },
      tertiaryButton: {
        background: '#ff3f40',
        textColor: '#ffffff'
      },
      header: {
        background: '#eaeaea',
        textColor: '#2d5734',
        color: '#2d5734',
        lightTextColor: '#2d5734',
        borderColor: 'rgba(45, 87, 52, 0.3)',
        accentColor: '#2d4b2a'
      },
      footer: {
        background: '#2d5734',
        headingTextColor: '#ffffff',
        bodyTextColor: '#ffffff',
        bodyTextColorRGB: '255, 255, 255',
        accentColor: '#00aa00',
        accentColorRGB: '0, 170, 0',
        border: 'none'
      },
      rightMenu: {
        backgroundRGB: 'rgb(254 242 242)',
        backgroundChildRGB: 'rgb(243 244 246)'
      },
      flickityArrow: '#060a05',
      productOnSaleAccent: '#2d4b2a',
      productOnSaleAccentRGB: '45, 75, 42',
      productPricePercentage: 'hsl(25, 100%, 94%)',
      cartImgBox: 'rgba(0, 255, 255, 0.2)', //#00ffc855,
      iconsColorHover: '#0000cd',
      white: '#fff',
      gray: {
        50: '#f0efeb',
        300: '#343a40'
      },
      yellow_300: '#F1C40F',
      purple: {
        100: '#7F57DF',
        300: '#5855E9'
      },
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
  }
} as const;