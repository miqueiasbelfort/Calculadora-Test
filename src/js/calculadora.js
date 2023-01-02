let Calculadora = {
    ADICAO: '+',    
    SUBTRACAO: '-',
    DIVISAO: '/',
    MULTIPLICACAO: '*',


    adicionar: function(n1, n2){
        return Calculadora.calcular(n1, n2, Calculadora.ADICAO)
    },
    subtrair: function(n1,n2){
        return Calculadora.calcular(n1,n2, Calculadora.SUBTRACAO)
    },
    dividir: function(n1, n2){
        if(n1 == 0 || n2 == 0) {
            return 'Erro'
        }
        return Calculadora.calcular(n1,n2, Calculadora.DIVISAO)
    },
    multiplicar: function(n1, n2){
        return Calculadora.calcular(n1,n2,Calculadora.MULTIPLICACAO)
    },
    calcular: (n1, n2, op) => {

        let res;
        
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)

        if(isNaN(n1) || isNaN(n2)){
            return 0
        }

        switch(op){
            case Calculadora.ADICAO:
                res = n1 + n2
            break
            case Calculadora.SUBTRACAO:
                res = n1 - n2
            break
            case Calculadora.DIVISAO:
                res = n1 / n2
            break
            case Calculadora.MULTIPLICACAO:
                res = n1 * n2
            break
            default:
                res = 0
        }

        return res
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
    module.exports = Calculadora
}