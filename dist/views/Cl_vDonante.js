export default class Cl_vDonante {
    inNombre;
    inDolares;
    inBolivares;
    vista;
    btAceptar;
    btCancelar;
    constructor() {
        this.btAceptar = document.getElementById("donante_btAceptar");
        this.btCancelar = document.getElementById("donante_btCancelar");
        this.vista = document.getElementById("donante");
        this.inNombre = document.getElementById("donante_inNombre");
        this.inDolares = document.getElementById("donante_inDolares");
        this.inBolivares = document.getElementById("donante_inBolivares");
    }
    get nombre() {
        return this.inNombre.value;
    }
    get dolares() {
        return this.inDolares ? +this.inDolares.value : 0;
    }
    get bolivares() {
        return this.inBolivares ? +this.inBolivares.value : 0;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
}
//# sourceMappingURL=Cl_vDonante.js.map