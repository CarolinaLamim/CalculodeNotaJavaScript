const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputN1 = e.target.querySelector('#nota1');
    const inputN2 = e.target.querySelector('#nota2');
    const inputN3 = e.target.querySelector('#nota3');
    const inputN4 = e.target.querySelector('#nota4');

    const N1 = Number(inputN1.value);
    const N2 = Number(inputN2.value);
    const N3 = Number(inputN3.value);
    const N4 = Number(inputN4.value);

    if(!N1) {
        setResultado('Nota 1 Inválida', false);
        return;
    }

    if(!N2) {
        setResultado('Nota 2 Inválida', false);
        return;
    }

    if(!N3) {
        setResultado('Nota 3 Inválida', false);
        return;
    }

    if(!N4) {
        setResultado('Nota 4 Inválida', false);
        return;
    }
    
    const notaFinal = calculaNotaFinal(N1,N2,N3,N4);
    const status = statusNota(notaFinal);

    const msg = `Sua Nota Final é ${notaFinal}. Status: ${status}`;
    setResultado(msg, true);
    
    function calculaNotaFinal(N1,N2,N3,N4){
    const notaFinal = (N1 + N2 + N3 + N4)/4;
    return notaFinal;
    }

    function statusNota(notaFinal){
        const statusresult = ['Passou direto', 'Prova Final'];
        if (notaFinal >= 7) {
            return statusresult[0];
        } else if (notaFinal < 7) {
            return statusresult[1];
        }
    }
    //console.log(notaFinal);
})



function criaP (className){
const p = document.createElement('p');
return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';
    const p = criaP(); 

    if (isValid)  {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);

}