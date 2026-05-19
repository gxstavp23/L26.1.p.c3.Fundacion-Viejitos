import Cl_mFundacion from "../models/Cl_mFundacion.js";
import Cl_mDonante from "../models/Cl_mDonante.js"; // Importante importar el modelo
export default class Cl_cFundacion {
    mFundacion = new Cl_mFundacion();
    vFundacion;
    cDonante;
    constructor(vistaFundacion, controladorDonante) {
        this.vFundacion = vistaFundacion;
        this.cDonante = controladorDonante;
        // 1. Cargar los datos del enunciado al iniciar
        this.cargarDonantesEnunciado();
        // 2. Refrescar la vista con los datos cargados
        this.actualizarVista();
        this.vFundacion.onNuevoDonante(() => this.procesar1Donante());
    }
    // Método para cargar los datos exactos de la imagen
    cargarDonantesEnunciado() {
        const datos = [
            { nombre: "Sofía", dolares: 10, bolivares: 80 },
            { nombre: "Mateo", dolares: 0, bolivares: 600 },
            { nombre: "Elena", dolares: 50, bolivares: 0 },
            { nombre: "David", dolares: 20, bolivares: 100 }
        ];
        datos.forEach(d => {
            this.mFundacion.AgregarDonante(new Cl_mDonante(d));
        });
    }
    // Centralizamos la actualización de la interfaz
    actualizarVista() {
        this.vFundacion.mostraDonante({
            donantes: this.mFundacion.donantes,
            totalRecaudadoDolares: this.mFundacion.totalRecaudaddoDolares(),
            totalRecaudadoBs: this.mFundacion.totalRecaudadoBolivares(),
            mejorDonante: this.mFundacion.mejorDonates(),
            cantidadRegistros: this.mFundacion.cantRegistrosProcesados(),
            ultimoDonante: this.mFundacion.ultimoDonante(),
            nombresSuperiorAlUltimo: this.mFundacion.nombresSuperiorAlUltimo()
        });
    }
    procesar1Donante() {
        this.cDonante.solicitarDonante((donante) => {
            if (donante !== null) {
                this.mFundacion.AgregarDonante(donante);
                this.actualizarVista();
            }
        });
    }
}
//# sourceMappingURL=Cl_cFundacion.js.map