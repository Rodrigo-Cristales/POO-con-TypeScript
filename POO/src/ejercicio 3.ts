export class Cancion{
    titulo : string;
    cancion : string;
    private autor : string 

    constructor(Titulo : string, Cancion : string){
        this.titulo = Titulo;
        this.cancion = Cancion;
        this.autor = "";
    }
//Metodo set
    setAutor(autor: string): void{
        this.autor = autor
    }
//Metodo get
    getAutor(): string{
        return this.autor
    }
//Metodo para mostrar algo adicional al codigo
    mostrar_datos():void{
        console.log("Este son los datos de Cancion");
    }
}