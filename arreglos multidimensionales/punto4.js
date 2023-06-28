/* Dado el arreglo [ [50, 60, 70], [“q”, “%”, “$”], [“?”, “>”, “<”], [1 , -8, -2] ]
a) Cambiar el elemento % por el elemento ?. Verifique el cambio usando console.log
b) Cambiar el elemento -8 por el elemento 9. Verifique el cambio usando console.log
c) Cambiar el elemento 50 por el elemento ¡. Verifique el cambio usando console.log
d) Eliminar el elemento $. Verifique el cambio usando console.log, imprima todo el arreglo.
e) Eliminar el elemento 70. Verifique el cambio usando console.log, imprima todo el arreglo.
f) Eliminar el elemento -2. Verifique el cambio usando console.log, imprima todo el arreglo.
*/
let arreglo = [[50, 60, 70], ["q", "%", "$"], ["?", ">", "<"], [1 , -8, -2]];

arreglo[1][1] = "?";
console.log(arreglo); 

arreglo[3][1] = 9;
console.log(arreglo); 

arreglo[0][0] = "¡";
console.log(arreglo);

arreglo[1].splice(2, 1);
console.log(arreglo); 

arreglo[0].splice(2, 1);
console.log(arreglo);

arreglo[3].splice(2, 1);
console.log(arreglo); 
