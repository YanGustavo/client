
import React from 'react';
import { useProductContext } from '../../ProductContext';
import RandomImage from 'ui/RandomImage';
import { VariationOption } from 'lib/types/Product';
import styled from 'styled-components';

const VariantWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 5px 0;
  height: 200px;

  &::-webkit-scrollbar {
    display: none;
  }

  .options-wrapper {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .options-wrapper > button {
    width: auto;
    height: 100px;
    padding: 3px;
    margin-right: 10px;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;

    &:first-child,
    &:hover {
      border: 1px solid #ccc;
    }

    &.active {
      border: 1px solid #ccc;
    }

    &:focus {
      outline: none;
    }

    &:hover {
      color: #f1f1f1;
    }
  }

  .options-wrapper ul {
    display: flex;
    flex-wrap: nowrap;
    padding: 0;
    margin: 0;
    list-style: none;
    margin-top: 10px;
  }

  .options-wrapper ul > li {
    width: auto;
    height: 100%;
    padding: 3px;
    margin-right: 10px;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;

    &:first-child,
    &:hover {
      border: 1px solid #ccc;
    }

    &.active {
      border: 1px solid #ccc;
    }

    button {
      width: 100%;
      height: 100%;
      padding: 10px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      word-break: break-all;
      color: #333;

      &:focus {
        outline: none;
      }

      &:hover {
        color: #f1f1f1;
      }
    }
  }
`;

function ProductVariant() {
  const { product, handleSelectVariation } = useProductContext();
  const [selectedKey, setSelectedKey] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState('');
  const [selectedOption, setSelectedOption] =
    React.useState<VariationOption | null>(null);

  React.useEffect(() => {
    if (product && product.variations && product.variations.length > 0) {
      const firstVariation = product.variations[0];
      setSelectedKey(firstVariation.key);
      setSelectedValue(firstVariation.value);

      if (firstVariation.options && firstVariation.options.length > 0) {
        const firstOption = firstVariation.options[0];
        setSelectedOption(firstOption);
        handleSelectVariation(firstOption);
      }
    }
  }, [product, handleSelectVariation]);

  const handleVariationClick = (selected_key, selected_value) => {
    setSelectedKey(selected_key);
    setSelectedValue(selected_value);
    setSelectedOption(null);

    if (product && product.variations && product.variations.length > 0) {
      const variation = product.variations.find(
        (v) => v.value === selected_value
      );
      if (variation && variation.options && variation.options.length > 0) {
        setSelectedOption(variation.options[0]);
        handleSelectVariation(variation.options[0]);
      }
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    handleSelectVariation(option);
  };

  return (
    <VariantWrapper>
      <p>
        {selectedKey}:{selectedValue}-{selectedOption && selectedOption.value}
      </p>
      <div className="options-wrapper">
        {product && product.variations && product.variations.map((variation) => (
          <button
            key={variation.value}
            onClick={() => handleVariationClick(variation.key, variation.value)}
            className={selectedValue === variation.value ? 'active' : ''}
          >
            {variation.value}
          </button>
        ))}
      </div>
      {selectedValue && (
        <div className="options-wrapper">
          <ul>
            {product.variations &&
              product.variations
                .find((variation) => variation.value === selectedValue)
                ?.options?.map((option) => (
                  <li
                    key={option.sku}
                    onClick={() => handleOptionClick(option)}
                    className={
                      selectedOption && selectedOption.sku === option.sku
                        ? 'active'
                        : ''
                    }
                  >
                    <button onClick={() => handleOptionClick(option)}>
                      {option.value}
                    </button>
                  </li>
                ))}
          </ul>
        </div>
      )}
    </VariantWrapper>
  );
}

export default ProductVariant;
