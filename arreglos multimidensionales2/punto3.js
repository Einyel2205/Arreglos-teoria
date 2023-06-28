/*Dado el arreglo [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]:
a) Recorrer todos sus elementos más internos y mostrar los números que sean impares. Use cualquier ciclo, for o
forEach.
b) Recorrer todos sus elementos más internos y mostrar la suma de estos. Como sugerencia use una variable
para acumular la suma, declarela antes del ciclo. Use cualquier ciclo, for o forEach. */

let arreglo=[ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];

for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo[i].length; j++) {
      let numero = arreglo[i][j];
        if (numero % 2 !== 0) {
        console.log(numero);
        }
    }
}
arreglo.forEach(i => {
    i.forEach(j => {
        if (j % 2 !== 0) {
            console.log(j);
        };
    });
});