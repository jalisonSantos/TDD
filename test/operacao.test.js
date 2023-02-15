const {describe, expect, it} = require('@jest/globals')
const calculadora = require("../src/operacoes")

describe('teste da calculadora ', () =>{

    it('Opperacao de sema', () => {
        let resultado = calculadora.sum(1,2);

        expect(resultado).toEqual(3)
        resultado = calculadora.sum(-1,2);

        expect(resultado).toEqual(1)
        resultado = calculadora.sum(0,2);

        expect(resultado).toEqual(2)
        resultado = () => calculadora.sum("a",2);

        expect (resultado).toThrow('nao e um numero')

        resultado = () => calculadora.sum(2,"a");

        expect (resultado).toThrow('nao e um numero');
    })

})
