var assert = require("assert");
var Ingrediente = require("../../src/con_objetos/receta").Ingrediente;
var Usuario = require("../../src/con_objetos/usuario").Usuario;

describe('usuarios', function() {
    "use strict";
    var fer;
    var homero;

    beforeEach(function() {
        fer = new Usuario(1.88, 85);
        homero = new Usuario(1.66, 120);
    });
    it('el IMC de fer esta bien', function() {
            assert.equal(24.05, fer.IMC().toFixed(2));
        }),
        it('homero tiene flor de IMC', function() {
            assert.equal(43.55, homero.IMC().toFixed(2));
        }),
        it('fer esta saludable', function() {
            assert.equal(true, fer.esSaludable());
        }),
        it('homero no esta saludable', function() {
            assert.equal(false, homero.esSaludable());
        });
});

describe('ingredientes', function() {
    "use strict";

    var unPollo;
    var unaMorci;
    var ingredienteVacio;
    var fer;
    var homero;

    beforeEach(function() {
        unaMorci = new Ingrediente();
        unaMorci.cantidad = 1;
        unaMorci.nombre = "Morcilla";
        unaMorci.calorias = 250;

        unPollo = new Ingrediente();
        unPollo.cantidad = 1;
        unPollo.nombre = "Pollo";
        unPollo.calorias = 30;
        ingredienteVacio = new Ingrediente();
        fer = new Usuario(1.88, 85);
        homero = new Usuario(1.66, 120);
    });
    it('un ingrediente vacio no esta ingresado', function() {
            assert.equal(false, ingredienteVacio.estaIngresado());
        }),
        it('un pollo esta ingresado', function() {
            console.log(unPollo.toString());
            console.log(unPollo.toJSON(["nombre", "calorias"]));
            assert.equal(true, unPollo.estaIngresado());
        }),
        it('un pollo no es pesado', function() {
            assert.equal(false, unPollo.esPesado());
        }),
        it('un pollo es conveniente para homero', function() {
            assert.equal(true, unPollo.esConvenientePara(homero));
        }),
        it('una morcilla es heavy', function() {
            assert.equal(true, unaMorci.esPesado());
        }),
        it('una morcilla no es conveniente para homero', function() {
            assert.equal(false, unaMorci.esConvenientePara(homero));
        }),
        it('una morcilla es conveniente para fer', function() {
            assert.equal(true, unaMorci.esConvenientePara(fer));
        });
});
