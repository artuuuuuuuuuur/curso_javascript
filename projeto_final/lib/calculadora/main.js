function somar() {
    var tn1 = window.document.getElementById('txtn1');
    var tn2 = window.document.getElementById('txtn2');
    var res = window.document.getElementById('res');
    
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var soma = n1 + n2;
    res.innerHTML = `${n1} + ${n2} = <strong>${soma}</strong>`
}
function subtrair() {
    var tn1 = window.document.getElementById('txtn1');
    var tn2 = window.document.getElementById('txtn2');
    var res = window.document.getElementById('res');
    
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var subtracao = n1 - n2;
    res.innerHTML = `${n1} - ${n2} = <strong>${subtracao}</strong>`
}
function multiplicar() {
    var tn1 = window.document.getElementById('txtn1');
    var tn2 = window.document.getElementById('txtn2');
    var res = window.document.getElementById('res');
    
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var multiplicacao = n1 * n2;
    res.innerHTML = `${n1} x ${n2} = <strong>${multiplicacao}</strong>`
}
function dividir() {
    var tn1 = window.document.getElementById('txtn1');
    var tn2 = window.document.getElementById('txtn2');
    var res = window.document.getElementById('res');
    
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var divisao = n1 / n2;
    res.innerHTML = `${n1} / ${n2} = <strong>${divisao}</strong>`
}