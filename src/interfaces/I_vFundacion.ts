
import Cl_mDonante from "../models/Cl_mDonante.js";
export interface I_vFundacion{

    onNuevoDonante(callback: () => void):void;

    mostraDonante({
        donantes,
        totalRecaudadoDolares,
        totalRecaudadoBs,
        mejorDonante,
        cantidadRegistros,
        ultimoDonante,
        nombresSuperiorAlUltimo
        
    }: {
        donantes: Cl_mDonante[];
        totalRecaudadoDolares: number;
        totalRecaudadoBs: number;
        mejorDonante: string;
        cantidadRegistros:number;
        ultimoDonante:string;
        nombresSuperiorAlUltimo:string;
        
    }): void


}