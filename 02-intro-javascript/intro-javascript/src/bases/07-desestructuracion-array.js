const arr = ['pedro','manuel'];

//Desestructurar array en el segundo elemento. ',' utiliza la coma para ignorar.
// const [, second] = arr;
// console.log(second);

//Tarea

const state = (valor) =>{
    return [valor, ()=>{console.log(`Hola ${valor}!`)}];
}



const newArr = state('Matias');
console.log(newArr[0]);

// Primer valor se llamarĂ¡ nombre
// Segundo valor se llamarĂ¡ setNombre

const [nombre, setNombre] = state('Jose');
console.log(nombre);
setNombre();

