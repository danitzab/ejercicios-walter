"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var trabajador_1 = require("./trabajador");
var Avaluador = /** @class */ (function (_super) {
    __extends(Avaluador, _super);
    function Avaluador() {
        var _this = this;
        var persona = {
            nombre: 'Danitza',
            apellido: 'Bonilla',
            edad: 25,
        };
        _this = _super.call(this, persona) || this;
        _this.saludar('avaluador');
        return _this;
    }
    Avaluador.prototype.saludar = function (profesion) {
        console.log("Hola " + this.persona.nombre + " - " + profesion);
    };
    return Avaluador;
}(trabajador_1.default));
exports.default = Avaluador;
new Avaluador();
//# sourceMappingURL=avaluador.js.map