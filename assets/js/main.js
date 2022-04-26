// Selecionando o botão "submit" e adcionando o evento de click, evento esse que chamará a função "submitStars()"
let submit = document.getElementById('submit')
submit.addEventListener("click", submitStars)


function submitStars(){
    let container1 = document.getElementById('container1')
    let container2 = document.getElementById('container2')
    let input = document.getElementsByClassName('circle');
    let check = null;

    //'let input' é um array, pois quando selecionamos pela ClassName, recebemos um array.
    // Usamos um loop nesse array, que vai analisar cada elemento que tem a class 'circle'. Quando algum elemento tiver checkado, ele passará a ser true. Quando for true, check receberá o valor do elemento checkado.

    // Por Exemplo: se o input radio(que está com a class 'circle') de 'value = 2' estiver checkado, ele retornará true e a variavel check receberá seu 'value'

    for(let i of input){
        if(i.checked == true){
            check = i.value
        }
    }

    // Se o valor de check for null, isto é, se nenhum elemento estiver checkado, vamos disparar um alert na tela. Só podemos prosseguir quando algum elemento for checkado.
    
    if(check === null){
        alert('Selecione uma das opções!')
    }
    else{
        container1.style.display = 'none'
        container2.style.display = 'grid'
        container2.children[1].innerHTML += ` ${check} of 5`
    }
}