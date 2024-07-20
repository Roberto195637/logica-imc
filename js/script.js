//sele~ção de dom




function calcularimc(){

    let peso = document.querySelector('#peso');
    
    let altura = document.querySelector('#altura');
    //alert('ok');
    let resultado = document.querySelector('#resultado');
    
    
    
    let valorpeso = parseFloat(peso.value);//parse float converte string em numeros flutuantes
    let valoraltura = parseFloat(altura.value);//parse int converte string em numeros inteiros
    
    let imc = valorpeso/(valoraltura*valoraltura);
    let classificacao = '';
    
    if(imc < 18.5){
        classificacao = 'Magreza';
    }
    else if(imc < 24.9){
        classificacao = 'Normal';
    }

    else if(imc < 29.9){
        classificacao = 'Sobrepeso';
    }

    else if(imc < 34.9){
        classificacao = 'Obesidade';
    }

    else{
        classificacao = 'Obesidade Grave';
    }

    resultado.innerHTML = `<h3>Seu IMC é: ${imc.toFixed(2)} <br> Sua Classificação é: ${classificacao}`
    
    
    
    


}

let btn = document.querySelector('#btn');

btn.addEventListener('click',calcularimc);



