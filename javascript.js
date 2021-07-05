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

//Ejercicio-1 Quinta Seccion
//Programacion orientada a objetos

let juan = {name: 'juan', birthyear: 1990, job:'Developer'}
let pedro = {name: 'pedro', birthyear: 1995, job:'Developer'}
let jose = {name: 'jose', birthyear: 1989, job:'Developer'}


//constructor
let Persona = function(name,birthyear,job)

{
    this.name = name;
    this.birthyear = birthyear;
    this.job = job;
}

let juan = new Persona('juan',1990,'Developer')
let pedro = new Persona('pedro',1995,'Contador')
let jose = new Persona('jose',1992,'Maestro')
console.log(juan,pedro,jose)

//Ejercicio-2 Quinta Seccion
//Vector
var Vec = function(x, y) 
{
    this.x = x;
    this.y = y;
}
Vec.prototype.plus = function(otrovec)
{
  return new Vec(this.x + otrovec.x, this.y + otrovec.y);
}
Vec.prototype.minus = function(otrovec)
{
  return new Vec(this.x - otrovec.x, this.y - otrovec.y);
}
Vec.prototype.length = function()
{
  return Math.sqrt(this.x * this.x + this.y * this.y);
}
  
  var vec1 = new Vec(1, 2);
  var vec2 = new Vec(2, 3);

  console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
  console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
  console.log(vec1.length()); // 2.23606797749979

 //Ejercicio-3 Quinta Seccion
//
let Persona = function(name)

{
    this.name = name;
}

let Developer = function (name,skills, YearsofExperience)

{
    Persona.call(this, name)
    this.skills = skills;
    this.YearsofExperience = YearsofExperience;
}

let juan = new Developer('Juan', 'Javascript', 10)
console.log(juan);

//Ejercicio-3 Quinta Seccion
//
let Group = function() 
{
    this.list = []
}
Group.prototype.has = function(num)
{
    return this.list.includes(num)
}
Group.prototype.add = function(num)
{
    if(!this.has(num))
    {
    this.list.push(num)
    }
}
Group.from = function(arr)
{
    let grupo = new Group();
    for (let i = 0; i < arr.length; i++)
    {
      grupo.add(arr[i])
    }
    return grupo
}
  let group = Group.from([1, 2, 3, 4, 5]);
  console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
  console.log(group.has(5)); // true
  console.log(group.has(10)); // false
  group.add(10);
  console.log(group.has(10)); // true

//Ejercicio-4 Quinta Seccion
//
let Persona = function(name,birthyear,job)
{
    this.name = name;
    this.birthyear = birthyear;
    this.job = job;
}
 Persona.prototype.calculateAge = function()
 {
     let today = new Date();
     let year = today.getFullYear();
     console.log(year - this.birthyear)
 }
let juan = new Persona('juan',1990,'Developer')
let pedro = new Persona('pedro',1995,'Contador')
let jose = new Persona('jose',1992,'Maestro')
juan.calculateAge();

console.log(juan,pedro,jose);

//Ejercicio-5 Quinta Seccion
//
var Triangle = function(a, b, c) 
{
  this.a = a
  this.b = b
  this.c = c
}
Triangle.prototype.getPerimeter = function()
{
    let perimetro = (this.a+this.b+this.c)
    return perimetro
    console.log(perimetro)
}

  var triangle = new Triangle(1, 2, 3);
  console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
  console.log(triangle.getPerimeter()); // 6

//Ejercicio-1 Seis Seccion
//
let numbers = [1, 2, 3, 4, 5];
let doubles = [];

for(var i = 0; i < numbers.length; i++) {
  doubles.push(numbers[i] * 2);
}

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]

//Ejercicio-2 Seis Seccion
//
let car =
{
    brand: 'Nissan',
    model: 'Sentra',
    year: 2020
}
console.log('Antes', car);
function addColor(auto)
{
    let nuevoCarro = Object.assign({}, auto,{color: 'Negro'})
    return nuevoCarro
}
let mismoCarro = addColor(car)
console.log('Despues', mismoCarro);
console.log('Este es el mimo', '',car === mismoCarro);

//Ejercicio-3 Seis Seccion
//
let conejo =
{
    orejas: 2,
    color: 'blanco',
    tamaño: 'mediano',
    herbivoro: true
}
console.log('Descripcion', conejo);
function addMamifero(animal)
{
    return {...animal, mamifero: true}
    //let mamifero = Object.assign({}, animal,{mamifero: true})
    //return mamifero
}
let esMamifero = addMamifero(conejo)
console.log('Es mamifero', esMamifero);
console.log('Son igual', conejo === esMamifero);

//Ejercicio-4 Seis Seccion
//
let cart = 
  [
    {
      item: 'Laptop',
      quantity: 1
    }
  ]
function addItemtoCar(cart,item, quantity)
{
    let newCar = cart.map(Element => Element)
    newCar.push({item: item, quantity: quantity})
    return newCar
}
 cart = addItemtoCar(cart, 'Phone', 1);
 console.log('segunda compra, ',cart);

 cart = addItemtoCar(cart, 'Book', 3);
 console.log('tercera compra, ',cart);
 
//Ejercicio-5 Seis Seccion
// funciones de primera clase o alto orden
let numbers = [1, 2, 3, 4, 5];

// let doubles = [];
// for(let i = 0; i < numbers.length; i++) {
// 	doubles.push(numbers[i] * 2);
// }

let doubles = numbers.map(number => number * 2)
let numerosImpares = numbers.filter(number => number % 2 !== 0)
let numerosPares = numbers.filter(number => number % 2 === 0)
let numerosMayor3 = numbers.filter(number => number > 3)

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]
console.log(numerosImpares);
console.log(numerosPares);
console.log(numerosMayor3);

//Ejercicio-6 Seis Seccion
// convertir de numeros a arrays y colocarlo en array con sus separaciones
let number = 12345;

//let string = number.toString();
//let array = string.split('');

//let array = number.toString().split('')
//let arrayOfNumbers = array.map(function(number){
//    return Number(number)
//})

//let suma = arrayOfNumbers.reduce(function(acum, elem){
//},0)

function sumaDigitos(number)
{
    return number
    .toString()
    .split()
    .map(number)
    .reduce(function(acum, elem){
        return acum + elem;
    },0)
}

console.log('suma', sumaDigitos(number));

//Ejercicio-6 Seis Seccion
// sumar un array con varios arrays en uno
function flatten(arrays) 
  {
      return arrays.reduce(function(acum, elem){
      return acum.concat(elem)
      },[])
  }

  let arrays = [[1, 2, 3], [4, 5], [6]];
  let array = flatten(arrays);
  console.log(array); // [1, 2, 3, 4, 5, 6]

//Ejercicio-7 Seis Seccion
//regresa los elementos verdaderos
function compact(array) 
  {
      return array.filter(elem => !!elem)
  }
  let array = [0, 1, false, 2, '', 3];
  let compactedArray = compact(array);
  console.log(compactedArray); // [1, 2, 3]

//Ejercicio-8 Seis Seccion
//Crear una función de alto orden loop que será similar a un for. Recibe value, una función test, una función update y una función body. En cada iteración se debe ejecutar la función test y terminar el ciclo si la función retorna false. Después se ejecuta la función body dándole como argumento el value actual. Por último se ejecuta la función update para crear un nuevo valor y se repite el proceso.

function loop(start, test, update, body) 
  {
    for(let value = start; test(value); value = update(value))
    {
        body(value)
    }
  }
  let test = function(n) {
    return n > 0;
  }
  let update = function(n) {
    return n - 1;
  }
  loop(3, test, update, console.log);
  // 3
  // 2
  // 1
  */
  //Ejercicio-8 Seis Seccion
  //
  