Object.prototype.augment = function(source) {
    "use strict";
    for (var k in source) {
        if (source.hasOwnProperty(k)) {
            this[k] = source[k];
        }
    }
    return this;
};

var dosis = {
    // atributos
    cantidad: 0,
    nombre: "",
    unidadMedida: "",
    // metodos
    estaIngresado: function() {
        return (this.cantidad > 0) && !(this.nombre === "");
    },
    toString: function() {
        return this.cantidad + " " + this.unidadMedida + " de " + this.nombre;
    }
}

var comestible = {
    calorias: 0,
    esConvenientePara: function(usuario) {
        return !this.esPesado() || usuario.esSaludable();
    },
    esPesado: function() {
        return this.calorias > 50;
    }
}

var convertibleAJSON = {
    toJSON: function(propiedadesVisibles) {
        var dto = new Object();
        for (var i in propiedadesVisibles) {
            var propiedad = propiedadesVisibles[i];
            if (this.hasOwnProperty(propiedad)) {
                dto[propiedad] = this[propiedad];
            }
        }
        return JSON.stringify(dto);
    }
}

function Ingrediente() {
    "use strict";

    this.augment(dosis);
    this.augment(comestible);
    this.augment(convertibleAJSON);
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
}

module.exports = {
    Ingrediente: Ingrediente
};
