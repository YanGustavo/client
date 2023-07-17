interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

interface Contact {
  phone: string;
  email: string;
  url: string;
}

interface ButtonStyle {
  color: string;
  backgroundColor: string;
}

interface ButtonSize {
  fontSize: string;
  padding: string;
}

interface desing {
  buttons: {
    primary: ButtonStyle;
    secondary: ButtonStyle;
    tertiary: ButtonStyle;
  };
  buttonSizes: {
    small: ButtonSize;
    medium: ButtonSize;
    large: ButtonSize;
  };
  grid: {
    container: string;
    gutter: string;
  };
  border: {
    radius: string;
    color: string;
    colorRGB: string;
    formColor: string;
  };
  box: {
    shadow: string;
  };
  font: {
    family: string;
    light: number;
    normal: number;
    bold: number;
    sizes: {
      xxxsmall: string;
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      xxxlarge: string;
      huge: string;
    };
  };
  colors: {
    placeholder: string;
    text: {
      default: string;
      rgb: string;
    };
    heading: string;
    success: {
      color: string;
      background: string;
    };
    error: {
      color: string;
      background: string;
    };
    link: {
      default: string;
      hover: string;
    };
    background: {
      default: string;
      light: string;
      lightRadial: string;
    };
    secondaryBackground: {
      default: string;
      rgb: string;
    };
    accentBackground: string;
    inputBackground: string;
    primaryButton: {
      background: string;
      backgroundRGB: string;
      textColor: string;
      backgroundHover: string;
    };
    secondaryButton: {
      background: string;
      backgroundRGB: string;
      textColor: string;
      backgroundHover: string;
    };
    tertiaryButton: {
      background: string;
      textColor: string;
    };
    header: {
      background: string;
      textColor: string;
      color: string;
      lightTextColor: string;
      borderColor: string;
      accentColor: string;
    };
    footer: {
      background: string;
      headingTextColor: string;
      bodyTextColor: string;
      bodyTextColorRGB: string;
      accentColor: string;
      accentColorRGB: string;
      border: string;
    };
    rightMenu: {
      backgroundRGB: string;
      backgroundChildRGB: string;
    };
    flickityArrow: string;
    productOnSaleAccent: string;
    productOnSaleAccentRGB: string;
    productPricePercentage: string;
    cartImgBox: string;
    iconsColorHover: string;
    white: string;
    gray: {
      50: string;
      300: string;
    };
    yellow_300: string;
    purple: {
      100: string;
      300: string;
    };
    red_300: string;
    black: string;
  };
  spacings: {
    xxxsmall: string;
    xxsmall: string;
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
  };
  layers: {
    base: number;
    menu: number;
    overlay: number;
    modal: number;
    alwaysOnTop: number;
  };
  transition: {
    default: string;
    fast: string;
  };
}

export interface Theme {
  slug: string;
  name: string;
  logo: string;
  icon: string;
  slogan: string;
  language: string;
  address: Address;
  contact: Contact;
  desing: desing;
}

