function calculaIMC(event) {
    event.preventDefault();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100;

    let IMC = peso / (altura * altura);

    IMC = IMC.toFixed(2);

    if(IMC < 18.5) {
        alert('peso baixo')
    }
    
    else if (IMC >= 18.5 && IMC < 24.9) {
        alert('peso normal')
    }

    else if (IMC >= 24.9 && IMC < 29.9) {
        alert('sobrepeso')
    }

    else if (IMC >= 29.9 && IMC < 34.9) {
        alert('Obesidade grau I')
    }

    else if (IMC >= 34.9 && IMC < 40) {
        alert('Obesidade grau II')
    }
    else {
        alert('Obesidade grau III')
    }

    alert(`${IMC}`);
}