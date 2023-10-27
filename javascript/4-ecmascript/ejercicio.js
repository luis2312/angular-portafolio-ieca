// AUXILIDADORES DE ECMAScript
// Utiliza los auxilidadores de ECMAScript dentro de las funciones (numerosMayoresAMedia & ordenamientoMayorAMenor) de la clase ListaNumeros 
// para obtener el siguiente resultado

/*
    RESULTADO ESPERADO EN CONSOLA:
    
    [6,8,10,9,7] // proviene de la función numerosMayoresAMedia()
    [10,9,8,7,6,5,4,3,2,1] // proviene de la función ordenamientoMayorAMenor
 */


class ListaNumeros {
    constructor(numeros) {
        this._numeros = numeros
    }

    get numeros() {
        return this._numeros
    }

    numerosMayoresAMedia() {
        /*
            filter. Filtrar items
            Se utiliza para crear un nuevo array reteniendo solo los elementos que cumplan con una condición específica
            La condición debe devolver `true` o `false`
        */

        // Calculo de la media
        const media = this.numeros.reduce((a, b) => a + b, 0) / this.numeros.length

        // COMPLETA AQUÍ CÓDIGO CON MÉTODO .filter
        const result = this._numeros.filter((numero) => numero > media);
        console.log(result);
    }

    ordenamientoMayorAMenor() {
        /*
            sort. Ordenamiento condicionado
            Investiga más sobre el funcionamiento de los parámetros (a,b) de sort para que lograr 
            un ordenamiento de mayor a menor

            this.numeros.sort((a, b))
            -Si compareFunction(a, b) es menor que 0, se sitúa a en un indice menor que b. Es decir, a viene primero.
            -Si compareFunction(a, b) retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes. Nota: el estandar ECMAscript no garantiza este comportamiento, por esto no todos los navegadores (p.ej. Mozilla en versiones que datan hasta el 2003) respetan esto.
            -Si compareFunction(a, b) es mayor que 0, se sitúa b en un indice menor que a.
        */

        // COMPLETA AQUÍ CÓDIGO CON MÉTODO .sort
        this.numeros.sort((a, b) => a - b);
        console.log(this.numeros)
    }

}

const misNumeros = new ListaNumeros([1, 5, 3, 4, 2, 6, 8, 10, 9, 7])
misNumeros.numerosMayoresAMedia()
misNumeros.ordenamientoMayorAMenor()
