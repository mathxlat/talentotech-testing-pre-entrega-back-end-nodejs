# Pre-entrega - CLI Fake Store API - Mathias Latronico

Este repositorio es mi solución a partir de los requerimientos compartidos en clase. `index.js` y `utils.js` contienen la solución de la pre-entrega. Se utiliza la suite de test como autoevaluación para comprobar que la implementación cumple con lo pedido.

## Que incluye este repositorio

- `package.json` con la configuracion del proyecto.
- Las dependencias necesarias para ejecutar los tests.
- La suite de tests para autoevaluar la solucion.
- `index.js` y `utils.js` solución de la pre-entrega.

## Requisitos

- Tener instalado Node.js 18 o superior.
- Tener instalado Git Bash.
- Tener conexion a internet para consumir la Fake Store API.

## Preparacion del proyecto

1. Descargar o clonar este repositorio.
2. Instalar las dependencias:

```bash
npm install
```

## Ejemplos de uso esperados

### Obtener todos los productos

```bash
npm run start GET products
```

Salida esperada (fragmento):

```
[
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description: 'Your perfect pack for everyday use...',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/...',
    rating: { rate: 3.9, count: 120 }
  },
  ... (20 productos en total)
]
```

### Obtener un producto por ID

```bash
npm run start GET products/7
```

Salida esperada:

```
{
  id: 7,
  title: 'White Gold Plated Princess',
  price: 9.99,
  description: 'Classic Created Wedding Engagement Solitaire Diamond Promise Ring...',
  category: 'jewelery',
  image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png',
  rating: { rate: 3, count: 400 }
}
```

### Crear un producto

```bash
npm run start POST products "Remera negra" 29.99 "men's clothing"
```

Salida esperada:

```
{
  id: 21,
  title: 'Remera negra',
  price: '29.99',
  category: "men's clothing"
}
```

### Eliminar un producto

```bash
npm run start DELETE products/7
```

Salida esperada:

```
{
  id: 7,
  title: 'White Gold Plated Princess',
  price: 9.99,
  description: 'Classic Created Wedding Engagement Solitaire Diamond Promise Ring...',
  category: 'jewelery',
  image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png',
  rating: { rate: 3, count: 400 }
}
```

## Autoevaluacion con tests

```bash
npm test
```
