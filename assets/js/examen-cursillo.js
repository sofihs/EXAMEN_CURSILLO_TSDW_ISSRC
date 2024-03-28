console.log("ejercicios de examen");

/*1- Resolver el problema utilizando javascript, para identificar una figura geométrica:
Teniendo una variable numérica que representa el número de lados de una figura geométrica, mostrar por consola su tipo. 
Los tipos son: "Círculo", "Triángulo", "Cuadrado", "Pentágono", "Hexágono" o "Polígono", según corresponda:

Círculo: si el número de lados es 0.
Triángulo: si el número de lados es 3.
Cuadrado: si el número de lados es 4.
Pentágono: si el número de lados es 5.
Hexágono: si el número de lados es 6.
Polígono: si el número de lados es mayor que 6.
Asegúrate de incluir un mensaje de error si el número de lados es menor o igual a cero.*/


/*2- Mejorar el ejercicio anterior con manejo de errores:
Modifica la función tipoFigura para que, además de determinar el tipo de figura geométrica, verifique que el número de lados sea válido (mayor o igual a cero). 
//Si el número de lados es menor a cero,  debe mostrar  un mensaje de error indicando que el número de lados no es correcto.
*/
/*3- Mejorar el ejercicio anterior para calcular el perímetro de la figura geométrica:

Amplía la funcionalidad del programa definiendo ademas una variable numerica que representa el largo de un lado,  calcule y retorne el perímetro de la misma. 
//El perímetro de una figura geométrica se calcula sumando las longitudes de todos sus lados. 
//Si es un círculo, el perímetro será la circunferencia, calculada como 2 * π * radio, donde π es una constante (aproximadamente 3.14159) y radio es el radio del círculo.
 (para simplificar el ejercicio, se toma solo 1 lado asumiendo que todos los lados restantes son iguales) .*/

 // Se define una función 'tipoFigura' que toma como parámetros numeroDeLados y longitudDeLado
 function tipoFigura(numeroDeLados, longitudDeLado){
    // Se verifica si el número de lados y la longitud de lado son números y no letras, por ejemplo
    if (isNaN(numeroDeLados) || isNaN(longitudDeLado)) {
        console.log("Tenes que ingresar números para el número de lados y la longitud del lado.");
        return;
    }
    // Se verifica si el numero de lados ingresado es menor que 0. Si es así, se muestra un mensaje indicando lo que es incorrecto.
    if(numeroDeLados < 0 || longitudDeLado < 0){
        console.log("El numero de lados y la longitud del lado no pueden ser menores que 0. Ingresa números mayores o iguales a 0.");
        return;
    }
    // Se declaran variables para almacenar el tipo de figura y el perimetro de la misma
    let tipo;
    let perimetroDeFigura;
    
    // Se utiliza un switch para mostrar el tipo de figura según su numero de lados
        switch (numeroDeLados){
            // Si el numero de lados es 0, indica que es círculo
            case 0:
            tipo = "Círculo";
            // Se calcula el perímetro de la figura, en este caso del círculo 2 * π * radio
            perimetroDeFigura = 2 * Math.PI * longitudDeLado;
            // Se muestra el tipo de figura y su perimetro
            console.log(`La figura es un ${tipo} y su perimetro es: ${perimetroDeFigura}`)
            break;
            // Si el numero de lados es 3, indica que es triangulo
            case 3:
            tipo = "Triángulo";
            // Se calcula el perímetro de la figura multiplicando el numero de lados por la longitud de los lados
            perimetroDeFigura = 3 * longitudDeLado;
            console.log(`La figura es un ${tipo} y su perimetro es: ${perimetroDeFigura}`);
            break;
            // Si el numero de lados es 4, indica que es cuadrado
            case 4:
            tipo = "Cuadrado";
            perimetroDeFigura = 4 * longitudDeLado;
            console.log(`La figura es un ${tipo} y su perimetro es: ${perimetroDeFigura}`);
            break;
            // Si el numero de lados es 5, indica que es pentagono
            case 5:
            tipo = "Pentágono";
            perimetroDeFigura = 5 * longitudDeLado;
            console.log(`La figura es un ${tipo} y su perimetro es: ${perimetroDeFigura}`);
            break;
            // Si el numero de lados es 6, indica que es hexagono
            case 6:
            tipo = "Hexágono";
            perimetroDeFigura = 6 * longitudDeLado;
            console.log(`La figura es un ${tipo} y su perimetro es: ${perimetroDeFigura}`);
            break;
            // Si el numero de mayor que 6, indica que es poligono
            default:
            tipo = "Polígono";
            perimetroDeFigura = numeroDeLados * longitudDeLado;
            console.log(`La figura es un ${tipo} y su perimetro es: ${perimetroDeFigura}`);
            break;
        }
    }

// Se definen valores para las variables numeroDeLados y longitudDeLado
let numeroDeLados = 3;
let longitudDeLado = 4;

// Se llama a la funcion tipoFigura con los valores definidos para numeroDeLados y longitudDeLado
tipoFigura(numeroDeLados, longitudDeLado);