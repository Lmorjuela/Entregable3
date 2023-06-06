//Función que me genera un número aleatorio entre 1 y el límite.

const getRandomNumber = limit => {
return Math.floor(Math.random()*limit)+1
}

export default getRandomNumber;