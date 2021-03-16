/*
### `tienenMismaLongitud(a, b)`

Crear una función `tienenMismaLongitud` que tome como argumentos dos strings `a` y `b`
 y devuelva `true` si tienen la misma longitud o `false` de lo contrario

```javascript
tienenMismaLongitud('javascript', 'java') // false
tienenMismaLongitud('manzana', 'cerveza') // true
```

*/

const tienenMismaLongitud = (a, b) => {
    return a.length === b.length ;
}

console.log(tienenMismaLongitud('palabra', 'carcaza'));
console.log(tienenMismaLongitud('lluvia', 'caballo'));
