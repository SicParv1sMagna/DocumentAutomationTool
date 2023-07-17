import { makeAutoObservable } from "mobx";


class Active {
    statement = "default";
    form = "default";
    os = "default";
    psi = "default";
    property = "default";

    constructor () {
        makeAutoObservable(this);
    }

    ActiveStatement () {
         this.statement = "active";
         this.form = "default";
         this.os = "default";
         this.psi = "default";
         this.property = "default";
         console.log(this.statement, this.form, this.os, this.psi, this.property)
    }
}
export default new Active();