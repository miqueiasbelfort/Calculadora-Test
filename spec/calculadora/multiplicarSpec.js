describe('Switch testes de multiplicação', () => {
  
    let Calculadora = require('../../src/js/calculadora')

    it('Deve retornar 6 para 2 e 3', () => {
        expect(Calculadora.multiplicar(2,3)).toEqual(6)
    })

    it('Deve retornar 6 para 2 e 3 em formato texto', () =>{
        expect(Calculadora.multiplicar('2','3')).toEqual(6)
    })

    it('Deve retornar 4.5 para 1.5 e 3', () => {
        expect(Calculadora.multiplicar(1.5,3)).toEqual(4.5)
    })

    it('Deve retornar 0 para valor 1 indefinido', () => {
        expect(Calculadora.multiplicar(undefined, 15)).toEqual(0)
    })

    it('Deve retornar 0 para valor 2 indefinido', () => {
        expect(Calculadora.multiplicar(3, undefined)).toEqual(0)
    })

})
