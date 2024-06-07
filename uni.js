function calcular() {
    const homem = document.getElementById("homem").value;
    const mulher = document.getElementById("mulher").value;
    const criança = document.getElementById("criança").value;
    
    
    
    const carne = (homem * 0.5 + mulher * 0.3 + criança * 0.2).toFixed(1);
    const frango = (homem * 0.2 + mulher * 0.2 + criança * 0.1).toFixed(1);
    const linguica = (homem * 0.2 + mulher * 0.2 + criança * 0.2).toFixed(1);
    const refrigerante = (homem * 0.3 + mulher * 0.4 + criança * 0.2).toFixed(1);
    const cerveja = (homem * 0.8 + mulher * 0.5).toFixed(1);

    document.getElementById('res').innerHTML = (`
        <li>Carne bovina: ${carne} kg</li>
        <li>Frango: ${frango} kg</li>
        <li>Linguiça: ${linguica} kg</li>
        <li>Refrigerante: ${refrigerante} litros</li>
        <li>Cerveja: ${cerveja} litros</li>
    `);
       
}