/*Dado el arreglo [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]:
a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach*/

let arreglo = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];

for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo[i].length; j++) {
      console.log(arreglo[i][j]);
    }
}
arreglo.forEach(i => {
    i.forEach(j => {
        console.log(j);
    });
});