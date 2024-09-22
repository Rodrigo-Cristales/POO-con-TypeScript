export abstract class Persona{
    nombre : string;
    apellido : string;
    direccion : string;
    telefono : number;
    edad : number;

    constructor (nombre : string, apellido : string, direccion : string, telefono : number, edad : number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    mayor_de_edad(): void{
        if(this.edad >= 18){
            console.log(`${this.nombre} ${this.apellido} Es mayor de edad`);
        }else {
            console.log(`${this.nombre} ${this.apellido} Eres menor de edad`);
        }
    }
    abstract Mostrar_datos_personales(): void 
}

export  class empleado extends Persona{

    sueldo : number

    constructor(nombre: string, apellido: string, direccion: string, telefono: number, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

//metodo para cargar el salario del empleado
    cargarSueldo(nuevo_sueldo : number):void{
        this.sueldo = nuevo_sueldo;
    }
//metodo pera imprimir el salario 
    imprimir_salario():void{
        console.log(`El sueldo de: ${this.nombre} ${this.apellido} es de $${this.sueldo}`);
        
    }
    //metodo para mostrar los datos personales de la persona
    Mostrar_datos_personales(): void {
        console.log(`Nombre : ${this.nombre}`);
        console.log(`Apellido : ${this.apellido}`);
        console.log(`Direccion : ${this.direccion}`);
        console.log(`Telefono : ${this.telefono}`);
        console.log(`Edad : ${this.edad}`);

        this.mayor_de_edad();  
    }
}