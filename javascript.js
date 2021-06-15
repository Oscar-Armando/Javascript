/*Ejercicio-1 Segunda Seccion
//Ciclo If
let greeting;
let time= 25
if(time < 0 || time >= 24)
{
greeting = "data error";
}
else if(time < 12)
{
greeting = "good morning";
}
else if(time < 20)
{
greeting = "good afternoon";
}
else if(time >= 20)
{
greeting = "good evening";
}
console.log(greeting)
*/

/*Ejercicio-2 Segunda Seccion
//Ciclo Case
let day = 8;
let text;
switch (day) 
{
    case 0:
        text="Domingo"
        break;
    case 1:
        text="Lunes"
        break;
    case 2:
        text="Martes"
        break;
    case 3:
        text="Miercoles"
        break;
    case 4:
        text="Jueves"
        break;
    case 5:
        text="Viernes"
        break;
    case 6:
        text="Sabado"
        break;
    default:
        text="Error"
        break;
}
console.log(text);
*/

/*Ejercicio-3 Segunda Seccion
//Operador ternarios
let speed = 120;

let message = speed > 100 ? "vas muy rapido" : "sigues las reglas";

console.log(message)
*/
/*

//Ejercicio-4 Segunda Seccion
//Ciclo For
for(let i = 0; i <= 9; i++)
{
    console.log("Hello World" + i)
}

//Ejercicio-5 Segunda Seccion
//Ciclo While
let j = 0;

while( j <= 11)
{
    console.log("while"+ j)
    j++
}
console.log("termina")
*/

//Ejercicio-6 Segunda Seccion
//Cuenta de numeros pares
/*
for(let i = 0; i <= 100; i=i+2)
{
    console.log("PAR=" + i)
}
*/
/*
//Ejercicio-7 Segunda Seccion
//Cuenta de numeros primos
for(let contador = 2; contador <= 100; contador++)
{
    let primo = true;
    for( let i = 2; i <= contador; i++)
    {
        if(contador % i === 0 && i !== contador)
        { primo = false }
    }
if (primo)
    {
    console.log(contador)
    }
}
*/
/*
//Ejercicio-1 Tercera Seccion
//Funciones
function calcularEdad(birthYear) 
{
 let edad = 2021 - birthYear;
 return edad;
}
const edadjuan = calcularEdad(1995)
const edadpedro = calcularEdad(1980)
console.log(edadjuan)
console.log(edadpedro)

function añosretiro(años,nombre)
{
    let edad = calcularEdad(años)
    let retiro = 65 - edad
    return(nombre + " Retiro en " + retiro + " años ")
}
console.log(añosretiro(1995, "Pedro"))
*/
/*
//Ejercicio-2 Tercera Seccion
//Funciones base por exponete
function exponente(base, exponente)
{
    let result = base**exponente;
    return result;
}
const operacion = exponente(4, 2)
console.log(exponente(4,2))
*/
//Ejercicio-3 Tercera Seccion
//Funciones base por exponete con ciclo
/*function power(base, exponente)
{
    let result=1;
    for(let i=0; i<exponente; i++)
    {
        //console.log(i)
        result= result*base
        //console.log(result)
    }
    return result
}
let exponencial = power (3,5);
console.log(exponencial);

//Ejercicio-4 Tercera Seccion
//Funciones
const queHacesTu = function(job, name)
{
    switch(job)
    {
        case "Developer":
            return name + " desarrolla aplicaciones chidas"
        break;
        case "Designer":
            return name + " diseña sitios increibles"
        break
        case "Otro":
            return name + " no esta definino"
        break
    }
}
console.log(queHacesTu("Developer", "pedro"))
console.log(queHacesTu("Designer", "Gabriela"))
console.log(queHacesTu("Otro", "Patricia"))

//Ejercicio-5 Tercera Seccion
//Funcion Factorial
let factorial = function fac(numero)
{
    return numero < 2 ? 1 : numero*fac(numero - 1)
}
console.log (factorial(3))

//Ejercicio-6 Tercera Seccion
//Funcion invocada de manera inmediata
(function nombre()
{let name ="Juan"
console.log(name)})()

//Ejercicio-6 Tercera Seccion
//Funcion comparadora
function mayor(num1, num2)
{
 if(num1 > num2)
 {
  return "El mayor es:" + num1;
 }
 else if (num2 > num1)
 {
  return "El mayor es:" + num2;
 }
 else
 {
     return "Los numeros son iguales"
 }
}
console.log(mayor(2,3))

//Ejercicio-6 Tercera Seccion
//Funcion Fibonacci
function fibo(limit)
{
    return  limit < 1 ? 0: limit <= 2 ? 1: fibo(limit-1)+ fibo(limit-2);
}
console.log(fibo(11));

//Ejercicio-1 Cuarta Seccion
//Arreglo
let numeros = [1,3,4,7,2,1,9,0]
function numMulti(nums)
{
let numMulti = [];
for(let i = 0; i  < nums.length; i++)
{
numMulti.push(nums[i]*2)
}
return numMulti;
}
console.log(numeros)
console.log(numMulti(numeros))

 function promedio(nums)
 {
     let suma= 0
     for (let i = 0; i < nums.length; i++)
     {
         suma += numeros[i]
     }
     return suma / nums.length
 }
 console.log(promedio(numeros))
 
 //Ejercicio-2 Cuarta Seccion
//Objetos
let car= {brand: 'Nissan', model: 'Versa', year: 2020}

function keyVal(objeto)
{
 let keys = Object.keys(objeto)
 let pairs = []
 for ( let i = 0; i < keys.length; i++)
 {
     pairs.push([keys[i], objeto[keys[i]]])
 }
 return pairs;
}
console.log(keyVal(car))

function ArrayObject(arr)
{
    let obj={}
    for(let i =0; i < arr.length; i++)
    {
        obj[arr[i][0]] = arr[i][1]
    }
    return obj;
}
console.log(ArrayObject(keyVal(car)));

 //Ejercicio-3 Cuarta Seccion
//
let Juan = {
    firstName: 'juan',
    LastName: 'perez',
    birthYear: 1990,
    calculateAge: function()
    {
        let today = new Date();
        let year = today.getFullYear();
       // this.age = year - this.birthYear
        return year - this.birthYear
    }
}
*/
//Ejercicio-4 Cuarta Seccion
// List
let singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];
  function pluck(list, propertyName) 
  {
    let val = []
     for ( let i = 0; i < list.length; i++)
     {
     val.push(list[i][propertyName])
     }
     return val; 
}
  console.log( pluck(singers, 'name') );
  // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  console.log( pluck(singers, 'band') );
  // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  console.log( pluck(singers, 'born') );
  // [1948, 1950, 1967, 1964]

  let singersGenero = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
    'rock'
  ];
  function Addgenero(list)
  {
      let genero = []
      for(let i = 0; i < list.length - 1; i++)
      {
       list[i].genero = list[list.length - 1]
       genero.push(list[i])
      }
      return genero
  }
console.log(Addgenero(singersGenero));