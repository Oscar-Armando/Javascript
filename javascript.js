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