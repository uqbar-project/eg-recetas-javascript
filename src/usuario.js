Number.prototype.between = function(min, max) {
    "use strict";
    return this >= min && this <= max;
}

function Usuario(unaAltura, unPeso) {
    this.altura = unaAltura;
    this.peso = unPeso;
}

Usuario.prototype = {
    IMC: function() {
        "use strict";
        return this.peso / (this.altura * this.altura);
    },
    esSaludable: function() {
        "use strict";
        return this.IMC().between(20, 25);
    }
}

module.exports = {
    Usuario: Usuario
};
