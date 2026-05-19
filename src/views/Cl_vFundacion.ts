import {I_vFundacion} from "../interfaces/I_vFundacion.js"
import Cl_mDonante from "../models/Cl_mDonante.js";
const html = String.raw;


export default class Cl_vFundacion implements I_vFundacion{
vista:HTMLElement | null;
tbDonantes: HTMLTableElement;
btNuevoDonante:HTMLButtonElement;
lblTotalRecaudadoDolar: HTMLElement;
lblTotalRecaudadoBs: HTMLElement;
lblMejorDonante:HTMLElement;
lblInfoExtra:HTMLElement;


constructor(){
   this.vista = document.getElementById("body") as HTMLElement;
    this.btNuevoDonante = document.getElementById("body_btAgregarDonante") as HTMLButtonElement;
    this.tbDonantes = document.getElementById("body_donantes") as HTMLTableElement;
    this.lblTotalRecaudadoDolar = document.getElementById("body_lblTotalRecaudadoDolar") as HTMLElement;
    this.lblTotalRecaudadoBs = document.getElementById("body_lblTotalRecaudadoBs") as HTMLElement;
    this.lblMejorDonante = document.getElementById("body_lblMejorDonante") as HTMLElement;
    this.lblInfoExtra = document.getElementById("body_lblInfoExtra") as HTMLElement;
}

onNuevoDonante(callback: () => void): void {
    this.btNuevoDonante.onclick = callback;
}
mostraDonante({ donantes, totalRecaudadoDolares,totalRecaudadoBs, mejorDonante,cantidadRegistros,ultimoDonante,nombresSuperiorAlUltimo }: { donantes: Cl_mDonante[]; totalRecaudadoDolares: number;totalRecaudadoBs:number; mejorDonante: string; cantidadRegistros:number; ultimoDonante:string; nombresSuperiorAlUltimo:string; }): void {
  
    this.tbDonantes.innerHTML = "";
    donantes.forEach((donante)=> {
        const tr = document.createElement("tr");
        tr.innerHTML = html`
        <td>${donante.nombre}</td>
        <td>$${donante.montoTotalDolares()}</td>
        <td>(Bs.${donante.montoTotalBolivares()})</td>
        `;
        this.tbDonantes.appendChild(tr);
    });

    this.lblTotalRecaudadoDolar.innerHTML =`($${totalRecaudadoDolares.toFixed(2)})` 
    this.lblTotalRecaudadoBs.innerHTML = `(${totalRecaudadoBs.toFixed(2)}.Bs)` 
    this.lblMejorDonante.innerHTML = mejorDonante
    this.lblInfoExtra.innerHTML = `
            Cantidad de registros procesados: ${cantidadRegistros}<br>
            El último donante es: ${ultimoDonante}<br>
            Nombres con valor superior al último: ${nombresSuperiorAlUltimo}<br>
            Metodos de ARRAYS usados: forEach,Filter,map,join.
        `;
    

}

mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }


}


