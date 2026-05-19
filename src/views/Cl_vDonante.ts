import { I_vDonante } from "../interfaces/I_vDonante.js";

export default class Cl_vDonante implements I_vDonante {

    inNombre: HTMLInputElement;
    inDolares: HTMLInputElement;
    inBolivares:HTMLInputElement
    vista:HTMLElement;
    btAceptar:HTMLButtonElement;
    btCancelar:HTMLButtonElement;

    constructor(){
        this.btAceptar = document.getElementById("donante_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("donante_btCancelar") as HTMLButtonElement;
        this.vista = document.getElementById("donante") as HTMLElement;
        this.inNombre = document.getElementById("donante_inNombre") as HTMLInputElement;
        this.inDolares = document.getElementById("donante_inDolares") as HTMLInputElement;
        this.inBolivares = document.getElementById("donante_inBolivares") as HTMLInputElement
    }

    get nombre():string{
        return this.inNombre.value;
    }

    
    
    get dolares():number{
        return this.inDolares ? +this.inDolares.value: 0;
    }

    get bolivares():number{
        return this.inBolivares ? +this.inBolivares.value: 0;
    }

    mostrar(): void {
        if (this.vista === null) return; 
        this.vista.hidden = false        
    }

    ocultar(): void {
        if (this.vista=== null) return;
        this.vista.hidden = true
    }

    onAceptar(callback: () => void): void {
        this.btAceptar.onclick = callback;
    }

    onCancelar(callback: () => void): void {
        this.btCancelar.onclick = callback;
    }
    


}