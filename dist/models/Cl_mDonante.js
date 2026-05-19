export default class Cl_mDonante {
    _nombre = "";
    _dolares = 0;
    _bolivares = 0;
    constructor({ nombre, dolares, bolivares }) {
        this.nombre = nombre;
        this.dolares = dolares;
        this.bolivares = bolivares;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get nombre() {
        return this._nombre;
    }
    set dolares(value) {
        this._dolares = value;
    }
    get dolares() {
        return this._dolares;
    }
    set bolivares(value) {
        this._bolivares = value;
    }
    get bolivares() {
        return this._bolivares;
    }
    montoTotalDolares() {
        return this.dolares + (this.bolivares / 40);
    }
    montoTotalBolivares() {
        return this.bolivares + (this.dolares * 40);
    }
}
//# sourceMappingURL=Cl_mDonante.js.map