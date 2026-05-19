import Cl_mDonante from "./Cl_mDonante.js";

export default class Cl_mFundacion{

    public donantes: Cl_mDonante[] = [];

    AgregarDonante(donante:Cl_mDonante): void{
         this.donantes.push(donante);
    }


    totalRecaudaddoDolares(){
        let acDolares = 0;
        this.donantes.forEach((donante) =>{
            acDolares += donante.montoTotalDolares();
        });
        return acDolares
    }

    totalRecaudadoBolivares(){
        let acBolivares = 0;
        this.donantes.forEach((donante) => {
            acBolivares += donante.montoTotalBolivares()
        })
        return acBolivares
    }


       
    mejorDonates(){
        if(this.donantes.length === 0)return "No hay donantes"
        let mayor = 0;
        let nombreMayor =""
        this.donantes.forEach((donante)=>{
            if (donante.montoTotalDolares() > mayor) {
                mayor = donante.montoTotalDolares();
                nombreMayor = donante.nombre
            }
        });
        return nombreMayor


    }

    //-REQUERIMIENTOS Extras

    cantRegistrosProcesados():number{
        return this.donantes.length;
    }

    ultimoDonante(): string{
        if (this.donantes.length === 0 ) return "No hay donantes" 
        return this.donantes[this.donantes.length - 1].nombre
    }


    nombresSuperiorAlUltimo(): string {
        if (this.donantes.length === 0) return "Ninguno";

        // el último donante registrado mediante acceso por índice
        const ultimo = this.donantes[this.donantes.length - 1];
        const montoUltimo = ultimo.montoTotalDolares();

        // se crea un nuevo arreglo dejando solo los objetos que cumplan la condición
        const filtro = this.donantes.filter(donante => donante.montoTotalDolares() > montoUltimo);

        // con el map se extrae una la propiedad nombre de cada objeto del nuevo array
        const nombres = filtro.map(donante => donante.nombre);

        // 3. Unimos los nombres resultantes en un texto simple separado por comas
        if (nombres.length > 0) {
             return nombres.join(", ")
                
            }else {
                return "Ninguno"}       
   }
}