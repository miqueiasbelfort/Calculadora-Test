describe('Switch de testes de subtração', () => {
  
    let Calculadora = require('../../src/js/calculadora.js')

    it('Deve retornar 5 para 8 e 3', () => {
        expect(Calculadora.subtrair(8,3)).toEqual(5)
    })

    it('Deve retornar 5 para 8 e 3 no formato texto', () => {
        expect(Calculadora.subtrair('8','3')).toEqual(5)
    })

    it('Deve retornar 4 para 5.5 e 4.5', () => {
        expect(Calculadora.subtrair(5.5, 1.5)).toEqual(4)
    })

    it('Deve retornar 0 para valor 1 invalido', () => {
        expect(Calculadora.subtrair(undefined, 10)).toEqual(0)
    })

    it('Deve retornar 0 para valor 2 invalido', () => {
        expect(Calculadora.subtrair(10, undefined)).toEqual(0)
    })

})
