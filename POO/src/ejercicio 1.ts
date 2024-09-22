export class Cabecera_pagina{

    private titulo : string;
    private color : string;
    private fuente : string;
    private alineacion : string;
    
    constructor(titulo: string, color: string, fuente: string){
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = "centrado";
    }
        //Metodo para obtener datos    
        Obtener_datos(titulo: string, color: string, fuente: string){
            this.titulo = titulo;
            this.color = color;
            this.fuente = fuente;
        } 
        //metodo para obtner alineacion
        Obtener_alineacion(alineacion : string){
            this.alineacion = alineacion;
        }
//Metodo para mostrar los datos 
        mostrar_datos():void{
            console.log(`Titulo: ${this.titulo}`);
            console.log(`Color : ${this.color}`);
            console.log(`Fuente: ${this.fuente}`);
            console.log(`Justifiacacion: ${this.alineacion}`);            
        }
}
