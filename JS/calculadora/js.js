class Calculadora {
    constructor(operacaoAnteriorElementoTexto, operacaoAtualElementoTexto) {
        this.operacaoAnteriorElementoTexto = operacaoAnteriorElementoTexto
        this.operacaoAtualElementoTexto = operacaoAtualElementoTexto
        this.limpar()
    }

    limpar() {
        this.operaracaoAtual = ''
        this.operaracaoAnterior = ''
        this.operaracao = undefined
    }

    delete() {
        this.operaracaoAtual = this.operaracaoAtual.toString().slice(0, -1)
    }

    adicionarNumero(numero) {
        if (numero === "." && this.operaracaoAtual.includes('.')) return
        this.operaracaoAtual = this.operaracaoAtual.toString() + numero.toString()
    }

    escolherOperacao(operacao) {
        if (this.operaracaoAtual === '') return
        if (this.operaracaoAnterior !== '') {
            this.computar()
        }
        this.operaracao = operacao
        this.operaracaoAnterior = this.operaracaoAtual
        this.operaracaoAtual = ''
    }

    computar() {
        let computacao
        const anterior = parseFloat(this.operaracaoAnterior)
        const atual = parseFloat(this.operaracaoAtual)
        if (isNaN(anterior) || isNaN(atual)) return
        switch (this.operaracao) {
            case '+':
                computacao = anterior + atual
                break
            case '-':
                computacao = anterior - atual
                break
            case 'x':
                computacao = anterior * atual
                break
            case '÷':
                computacao = anterior / atual
                break
            default:
                return
        }
        this.operaracaoAtual = computacao
        this.operaracao = undefined
        this.operaracaoAnterior = '' 
    }

    obterNumeroDisplay(numero) {
        const stringNumero = numero.toString()
        const digitoInteiro = parseFloat(stringNumero.split('.')[0])
        const digitoDecimal = stringNumero.split('.')[1]
        let inteiroDisplay 
        if(isNaN(digitoInteiro)) {
            inteiroDisplay = ''
        } else {
            inteiroDisplay = digitoInteiro.toLocaleString('br', {maximumFractionDigits: 0 })
        }
        if(digitoDecimal != null) {
            return `${inteiroDisplay}.${digitoDecimal}`
        } else {
            return inteiroDisplay
        }
    }

    atualizarDisplay() {
        this.operacaoAtualElementoTexto.innerText =
            this.obterNumeroDisplay(this.operaracaoAtual)
        if (this.operacao !== null) {
            this.operacaoAnteriorElementoTexto.innerText =
                `${this.operaracaoAnterior} ${this.operaracao}`
        } else {
            this.operacaoAnteriorElementoTexto.innerText = ''
        }
    }
}




const botoesNumero = document.querySelectorAll('[data-numero]')
const botoesOperacao = document.querySelectorAll('[data-operacao]')
const botaoIgual = document.querySelector('[data-igual]')
const botaoDelete = document.querySelector('[data-delete]')
const botaoLimparTudo = document.querySelector('[data-limpar-tudo]')
const operacaoAnteriorElementoTexto = document.querySelector('[data-operacao-anterior]')
const operacaoAtualElementoTexto = document.querySelector('[data-operacao-atual]')

const calculadora = new Calculadora(operacaoAnteriorElementoTexto, operacaoAtualElementoTexto)

botoesNumero.forEach(button => {
    button.addEventListener('click', () => {
        calculadora.adicionarNumero(button.innerText)
        calculadora.atualizarDisplay()
    })
})

botoesOperacao.forEach(button => {
    button.addEventListener('click', () => {
        calculadora.escolherOperacao(button.innerText)
        calculadora.atualizarDisplay()
    })
})

botaoIgual.addEventListener('click', button => {
    calculadora.computar()
    calculadora.atualizarDisplay()
})

botaoLimparTudo.addEventListener('click', button => {
    calculadora.limpar()
    calculadora.atualizarDisplay()
})

botaoDelete.addEventListener('click', button => {
    calculadora.delete()
    calculadora.atualizarDisplay()
})