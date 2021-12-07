import React from 'react'
import renderer from 'react-test-renderer';

import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from './data/products';

describe('ProductImage', () => {
  test('Should render with a custom image ', () => {

    const wrapper = renderer.create(
      <ProductImage img='https://image.com/image.png' />
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  test('Should render with a default image', () => {

    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => <ProductImage />}
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
