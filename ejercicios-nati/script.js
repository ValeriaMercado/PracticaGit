//Ejercicio 1 
//const capitalLetter = (string) =>{
//     let letra = string.charAt(0)
//     return letra.toUpperCase()
// }

// console.log(capitalLetter("Reloj"))
// console.log(capitalLetter("reloj"))

//Ejercicio 2 
//const capitalLetter = (string) =>{
//     let letra = string.slice(-1)
//     return letra
// }

// console.log(capitalLetter("Reloj"))
// console.log(capitalLetter("reloj"))

//Ejercicio 3

// const sumar = (a,b,c) => {
//     if (!c) return a + b
//     return a + b + c
// }

// console.log(sumar(4,5,7))
// console.log(sumar(5,7))

//Ejercicio 4

// const raizCuadrada = (numero) => {
//     return Math.sqrt(numero)
// }

// console.log(raizCuadrada(16))
// console.log(raizCuadrada(4))

//Ejercicio 5

// const alCuadrado = (numero,exponente) => {
//     return Math.pow(numero, exponente)
// }

// console.log(alCuadrado(4,2))

// const alCuadrado = (numero) => {
//     return numero * numero
// }

// console.log(alCuadrado(4))

// Ejercicio 6

// const gritar = (string) => {
//     return `¡${string}!`
// }

// console.log(gritar("Hola"))

//Ejercicio 7
// const convertirHorasSegundos = (hora) => {
//     return hora * 3600
// }

// console.log(convertirHorasSegundos(3))
// console.log(convertirHorasSegundos(4.5))

// Ejercicio 8

// const obtenerDatosDeCiudad = (nombre,numero,pais) => {
//     return `La ciudad de ${nombre} tiene una población de ${numero} habitantes y esta ubicada en ${pais}`
// }

// console.log(obtenerDatosDeCiudad("Santa Fe", 545606, "Argentina"))


//Ejercicio 9
// const clacularFPS = (FPS,minutos) => {
//     return FPS*60*minutos
// }

// console.log(clacularFPS(1,1))
// console.log(clacularFPS(10,2))

//Ejericio 10 y 11
// const calcularPorcentaje = (numero,porcentaje) => {
//     return ((porcentaje*numero)/100) 
// }

// console.log(calcularPorcentaje(100,15))

// const sumarPorcentaje = (c, d) => {
//     return c + d
// }
// const restarPorcentaje = (c, d) => {
//     return c - d
// }
// console.log(sumarPorcentaje(100,calcularPorcentaje(100,15)))
// console.log(restarPorcentaje(100,calcularPorcentaje(100,15)))

// Ejercicio 10 (otra opción)

// const calcularPorcentaje = (numero, porcentaje) => {
//     return (porcentaje * numero)/ 100 
//     }
    
//     const sumarPorcentaje = (numero, calcularPorcentaje) => {
//     return numero + calcularPorcentaje
//     }
    
//     console.log(sumarPorcentaje(200,calcularPorcentaje(200,50)))

//Ejercicio 12
// const generarEmail = (usuario,dominio) => {
//     return `${usuario}@${dominio}.com`  

// }
// console.log(generarEmail("nataliasaidman","gmail"))

//Ejercicio 13
// const esStringMasLargo = (a, b) => {
//     return Math.max(a.length, b.length)
// }

// console.log(esStringMasLargo("Esta soleado","No llovio en toda la semana"))

//Ejercicio 14
// const aceptaDeposito = (monto) => {
//         if (monto % 10 == 0 ) return true
//         return false
//     }
// console.log(aceptaDeposito(440))
// console.log(aceptaDeposito(123))
// console.log(aceptaDeposito(500.50))
// console.log(aceptaDeposito(1000))

// Ternario
// const aceptaDeposito = (monto) => {
//   return monto % 10 == 0 ? true : false;
// }

// console.log(aceptaDeposito(440))
// console.log(aceptaDeposito(123))
// console.log(aceptaDeposito(500.50))
// console.log(aceptaDeposito(1000))

//Ejercicio 15

// const esUltimoCaracter = (palabra, caracter) => {
//     return palabra.slice(-1) == caracter ? true : false
// }

// console.log(esUltimoCaracter("love","e"))
// console.log(esUltimoCaracter("love","o"))
// console.log(esUltimoCaracter("Nati","i"))

// Ejercicio 16
// const esValida = (contraseña) =>{
//     return contraseña.length >= 8 ? true : false

// }

// console.log(esValida(prompt("ingrse su contraseña")))

//Ejercicio 17

// const sonIguales = (a,b) => {
//     return a.toLowerCase() == b.toLowerCase() ? true : false
// }

// console.log(sonIguales("javascript","JavaScript"))
// console.log(sonIguales("No estoy gritando","estoy gritando"))
// console.log(sonIguales("AdA LoVeLaCe","Ada Lovelace"))

//Ejercicio 18
// const capitalizar = (a) => {
//     return a.replace(a.charAt(0), a.charAt(0).toUpperCase())

// }

// console.log(capitalizar("love"))
// console.log(capitalizar("natalia"))

//Ejercicio 19
// const obtenerDuracionEnSegundos = (string) => {
//     let minutos = parseInt(string.slice(0,2))
//     let segundos = parseInt(string.slice(3,5))
//     return minutos*60 + segundos
// }

// console.log(obtenerDuracionEnSegundos("00:33"))
// console.log(obtenerDuracionEnSegundos("01:05"))
// console.log(obtenerDuracionEnSegundos("10:42"))

//Ejercicio 20
// const esSaludoValido = (saludo) =>{
//     return saludo.toLowerCase().includes("hola") ? true : false

// }

// console.log(esSaludoValido("Hola alumna!"))
// console.log(esSaludoValido("hola alumna"))
// console.log(esSaludoValido("Que onda perri"))

//Ejercicio 21 = ejercicio 16

//Ejercicio 22

// const sonIdenticas = (contraseña1,contraseña2) => {
//     return contraseña1 === contraseña2 ? true : false
// }

// console.log(sonIdenticas("contraseniaMuySegura","contraseniaMuySegura"))
// console.log(sonIdenticas("abc123","abc123456"))

//Ejercicio 23

// const esFraccionMayorAUno = (fraccion) => {
//     return (parseInt(Math.ceil(fraccion.charAt(0)/fraccion.charAt(2)))) >1 ? true : false

// }

// console.log(esFraccionMayorAUno("1/2"))
// console.log(esFraccionMayorAUno("4/2"))
// console.log(esFraccionMayorAUno("2/2"))
// console.log(esFraccionMayorAUno("6/4"))
// console.log(esFraccionMayorAUno("9/4"))
// console.log(esFraccionMayorAUno("7/4"))

// //Ejercicio 24

// const esPuenteSeguro = (string) => {
//   if(string.includes("#") && string.includes(" ")) return false
//   else {return true}
// }

// console.log(esPuenteSeguro("### ##"))
// console.log(esPuenteSeguro("##### #####"))
// console.log(esPuenteSeguro("#######"))

// Ejercicio 25

// const obtenerExtension = (archivo) => {
//     return archivo.split(".")[1]
// }

// console.log(obtenerExtension("imagen.png"))
// console.log(obtenerExtension("index.html"))
// console.log(obtenerExtension("notas.txt"))

















