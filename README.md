# paul-product-card

Este es un paquete de pruebas de despliegue en NPM

### Paul Chávez

## Ejemplo

```
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "paul-product-card"
```


```
  <ProductCard
    initialValues={{
      count: 6
    }}
    product={product}
  >
    {({ reset, count, increaseBy, isMaxCountReached }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )
    }
  </ProductCard>
```