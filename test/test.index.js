const assert = require('assert');
const func = require('../index');
const linksMd = require('../index');
const readDir = require('../index');


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

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

                describe('func', () => {
                    it('como la extension no es md deberia retornar', () => {
                      expect(func(readme.js)).toBe(null);
                    });
                 });

