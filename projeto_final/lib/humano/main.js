class Humano {
    constructor(nome) {
        this.nome = nome;
    }
    andar() {
        return this.nome + ' andou um passo!'
    }
    cantar() {
        return this.nome + ' cantou uma música'
    }

}

const HumanoFalante = Base => class extends Base {
    falar() {
        return this.nome + ' falou: "Sejam bem-Vindos!!"'
    }
}

const HumanoFalanteMixado = Base => class extends Base{}
const HumanoFinal = HumanoFalanteMixado(HumanoFalante(Humano))
const humano = new HumanoFinal('Artur')

document.writeln(humano.andar() + "<br><br>")
document.writeln(humano.cantar() + "<br><br>")
document.writeln(humano.falar())
