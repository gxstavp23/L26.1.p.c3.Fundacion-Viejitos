const html = String.raw;
export default class Cl_vFundacion {
    vista;
    tbDonantes;
    btNuevoDonante;
    lblTotalRecaudadoDolar;
    lblTotalRecaudadoBs;
    lblMejorDonante;
    lblInfoExtra;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoDonante = document.getElementById("body_btAgregarDonante");
        this.tbDonantes = document.getElementById("body_donantes");
        this.lblTotalRecaudadoDolar = document.getElementById("body_lblTotalRecaudadoDolar");
        this.lblTotalRecaudadoBs = document.getElementById("body_lblTotalRecaudadoBs");
        this.lblMejorDonante = document.getElementById("body_lblMejorDonante");
        this.lblInfoExtra = document.getElementById("body_lblInfoExtra");
    }
    onNuevoDonante(callback) {
        this.btNuevoDonante.onclick = callback;
    }
    mostraDonante({ donantes, totalRecaudadoDolares, totalRecaudadoBs, mejorDonante, cantidadRegistros, ultimoDonante, nombresSuperiorAlUltimo }) {
        this.tbDonantes.innerHTML = "";
        donantes.forEach((donante) => {
            const tr = document.createElement("tr");
            tr.innerHTML = html `
        <td>${donante.nombre}</td>
        <td>$${donante.montoTotalDolares()}</td>
        <td>(Bs.${donante.montoTotalBolivares()})</td>
        `;
            this.tbDonantes.appendChild(tr);
        });
        this.lblTotalRecaudadoDolar.innerHTML = `($${totalRecaudadoDolares.toFixed(2)})`;
        this.lblTotalRecaudadoBs.innerHTML = `(${totalRecaudadoBs.toFixed(2)}.Bs)`;
        this.lblMejorDonante.innerHTML = mejorDonante;
        this.lblInfoExtra.innerHTML = `
            Cantidad de registros procesados: ${cantidadRegistros}<br>
            El último donante es: ${ultimoDonante}<br>
            Nombres con valor superior al último: ${nombresSuperiorAlUltimo}<br>
            Metodos de ARRAYS usados: forEach,Filter,map,join.
        `;
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
}
//# sourceMappingURL=Cl_vFundacion.js.map