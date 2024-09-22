function mostrarMenu(){
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }
    else {
        menuMobile.classList.add('open');
    }
}


function calcularIMC(){
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    if(peso && altura){
        const imc = (peso / (altura*altura)).toFixed(2);
        let categoria;
        if (imc < 18.5){
            categoria = "Baixo peso";
        } else if (imc <24.9){
            categoria = "Peso normal";
        } else if (imc < 29.9){
            categoria = "Sobrepeso";
        } else { 
            categoria = "Obesidade";
        }
        document.getElementById('result').innerText = `Seu imc é ${imc} (${categoria})`;
        console.log(imc)
    } else {
        document.getElementById('resultado').innerText = "Por favor, preencha todos os campos";
    }
    
}