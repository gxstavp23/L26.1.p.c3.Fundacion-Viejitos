import Cl_mDonante from "../models/Cl_mDonante.js";
export default class Cl_cDonante {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        // El controlador se suscribe a los eventos de la interfaz
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    // Método para que la Curso llame a este controlador
    solicitarDonante(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mDonante({
            nombre: this.vista.nombre,
            dolares: this.vista.dolares,
            bolivares: this.vista.bolivares
        }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cDonante.js.map