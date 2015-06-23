function Dosis() {
    // atributos
    this.cantidad = 0,
    this.nombre = "",
    this.unidadMedida = "",
    // metodos
    this.estaIngresado = function() {
        return (this.cantidad > 0) && (this.nombre !== "");
    },
    this.toString = function() {
        return this.cantidad + " " + this.unidadMedida + " de " + this.nombre;
    };
}

function Comestible() {
    this.calorias = 0,
    this.esConvenientePara = function(usuario) {
        return !this.esPesado() || usuario.esSaludable();
    },
    this.esPesado = function() {
        return this.calorias > 50;
    };
}

function ConvertibleAJSON() {
    this.toJSON = function(propiedadesVisibles) {
        var dto = { };
        for (var i in propiedadesVisibles) {
            var propiedad = propiedadesVisibles[i];
            if (this.hasOwnProperty(propiedad)) {
                dto[propiedad] = this[propiedad];
            }
        }
        return JSON.stringify(dto);
    };
}

function Ingrediente() {
    "use strict";

    Dosis.apply(this);
    Comestible.apply(this);
    ConvertibleAJSON.apply(this);
}

Ingrediente.prototype = {
    validar: function() {
        if (!this.estaIngresado()) {
            throw new Error("No ha ingresado cantidad o nombre del ingrediente");
        }
        if (calorias < 0) {
            throw new Error("Debe ingresar un valor positivo de calorías");
        }
    }
};

module.exports = {
    Ingrediente: Ingrediente
};
