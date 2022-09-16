var idade = window.prompt("qual sua idade?")

if(idade < 18 || idade > 65) {
    document.write("sua idade é " + idade + " anos. voto não obrigatório" )
} else if (idade >= 18 || idade <= 65) {
    document.write("sua idade é " + idade + " anos. voto obrigatório")
}