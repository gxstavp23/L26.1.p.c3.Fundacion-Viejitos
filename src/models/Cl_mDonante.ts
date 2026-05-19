export default class Cl_mDonante{

private _nombre: string = "";
private _dolares: number = 0;
private _bolivares : number = 0;

constructor({nombre,dolares,bolivares}: {nombre:string,dolares:number,bolivares:number}){
    this.nombre = nombre;
    this.dolares = dolares;
    this.bolivares = bolivares;
}



set nombre(value:string){
    this._nombre = value;
}
get nombre():string{
    return this._nombre
}

set dolares(value:number){
    this._dolares = value;
}
get dolares():number{
    return this._dolares
}

set bolivares(value:number){
    this._bolivares = value;
}
get bolivares():number{
    return this._bolivares
}

montoTotalDolares():number{
    return this.dolares + (this.bolivares/40)
}

montoTotalBolivares():number{
    return this.bolivares + (this.dolares * 40)
}




}



