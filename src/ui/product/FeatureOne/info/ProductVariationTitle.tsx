import * as React from 'react';
import { useProductContext } from '../../ProductContext';
//Styles
import {P} from 'components/Typography';

function ProductVariantTitle() {  
	const { selectedVariation } = useProductContext();
	return <P>{selectedVariation.value} </P>; 
  // - {selectedVariation.key}
}

export default ProductVariantTitle;
