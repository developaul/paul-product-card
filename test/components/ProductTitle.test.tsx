import React from 'react'
import renderer from 'react-test-renderer'

import ProductCard, { ProductTitle } from '../../src/components';

import { product1 } from './data/products';

describe('ProductTitle', () => {
  test('It should display the component correctly with the custom title', () => {

    const wrapper = renderer.create(
      <ProductTitle title='Custom Product' className="custom-class" />
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })


  test('The component must show the name of the product', () => {

    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <ProductTitle />}
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})