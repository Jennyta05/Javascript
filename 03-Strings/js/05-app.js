const producto = 'Monitor 20 pulgadas';

//remplazar datos
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

//cortar parte de cadena de texto
console.log(producto.slice(0,10));//donde inicia y termina de cortar

//o tambien
console.log(producto.substring(0,10));

/*diferencias enre slice y substring es que al poner primero un numero mayor
slice no hace nada y substring toma solo un valor*/

//eliminar solo un caracter
console.log(producto.charAt(0)); //cortaria la letra en 0 
