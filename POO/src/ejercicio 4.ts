export class Cuenta {

    nombre : string;
    cantidad : number;
    tipo_de_cuenta : string;
    numero_de_cuenta : number;

        constructor(nombre: string, cantidad: number, tipo_cuenta : string, numero_cuenta: number){
            this.nombre = nombre;
            this.cantidad = cantidad;
            this.tipo_de_cuenta = tipo_cuenta;
            this.numero_de_cuenta = numero_cuenta
        }
        //Metodo para depositar dinero
        public despositar(desposito : number): void {
            if(desposito < 5){
                console.log("El deposito debe de ser mayor a $5.00")               
            }else{
                this.cantidad += desposito
                console.log("Su deposito a sido todo un exito");
            }
    }

    //metodo para retirar efectivo
        public retirar(valor: number):void{
            if(valor < 5){
                console.log("No se pueden retirar menos de $5.00");
                
            }else if (this.cantidad < valor){
                console.log("No hay suficiente efectivo para hacer el retiro");
                
            }else{
                this.cantidad -= valor
                console.log(`Usted a retirado la cantidad de $${valor}, Su saldo restante es de : $${this.cantidad}`);   
            }
        }
//Metodo para mostrar los datos de la clase cuenta
        mostrar_datos_de_cuenta():void{
            console.log(`Nombre : ${this.nombre}`);
            console.log(`Cantidad : ${this.cantidad}`);
            console.log(`Tipo de cuenta: ${this.tipo_de_cuenta}`);
            console.log(`Numero de cuenta : ${this.numero_de_cuenta}`);
        }
}