function calculaIMC(event) {
    event.preventDefault();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document,getElementById('altura').value);

    alert(`${peso}  ${altura}`);
}