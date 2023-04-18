import * as React from 'react';
import { useProductContext } from '../../ProductContext';
//Styles
import {P} from 'components/Typography';

function ProductVariantTitle() {  
	const { selectedVariant } = useProductContext();
	return <P>{selectedVariant.value} - {selectedVariant.capacity}</P>;
}

export default ProductVariantTitle;
