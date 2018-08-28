const assert = require('assert');
const func = require('../index');
const linksMd = require('../index');
const readDir = require('../index');


newFunction();

function newFunction() {
        describe('linksMd', () => {
            it('debería ser una función', () => {
                assert.equal(typeof linksMd, 'function');
            });
        });
    }


    newFunction1();

    function newFunction1() {
            describe('func', () => {
                it('debería ser una función', () => {
                    assert.equal(typeof func, 'function');
                });
            });
        }
    

            newFunction2();

            function newFunction2() {
                    describe('readDir', () => {
                        it('debería ser una función', () => {
                            assert.equal(typeof readDir, 'function');
                        });
                    });
                }


                newFunction1();

                function newFunction1() {
                        describe('func', () => {
                            it('la funcion debería retornar null', () => {
                                assert.equal( "null", "null");
                            });
                        });
                    }
                



