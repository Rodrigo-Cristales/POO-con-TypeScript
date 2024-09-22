export class calculadora{
//Hago un metodo por cada operacion matematicas
    public sumar(a : number, b: number): number {
        return a + b
    }
//Metodo restar
    public restar( a: number, b: number): number{
        return a - b;
    }
//Metodo multiplicar
    public multiplicar(a: number, b: number): number{
          return a * b;
    }
//Metodo dividir
    public dividir (a: number, b: number): number{
        return a / b;
    }
//Metodo potenciar
    public potenciar (a: number, b: number): number{
        return Math.pow(a, b);
    }
//Metodo factorial
    public factorial (n: number): number{
        if(n < 0){
            console.log("No se pueden ingresar numeros negativos");
        }
        if(n === 0 || n === 1){
            return 1
        }
        let resultado = 1;
        for(let i = 2; i <= n; i++ ){
            resultado *= i;
        }
        return resultado
    }
}

