function criptografarTexto() {
    var texto = document.getElementById('texto').value;
    var textoCriptografado = texto.replace(/e/g, 'enter')
                                  .replace(/i/g, 'imes')
                                  .replace(/a/g, 'ai')
                                  .replace(/o/g, 'ober')
                                  .replace(/u/g, 'ufat');
    localStorage.setItem('texto', textoCriptografado);
    window.location.href = 'result.html';
}

function descriptografarTexto() {
    var texto = document.getElementById('texto').value;
    var textoDescriptografado = texto.replace(/enter/g, 'e')
                                     .replace(/imes/g, 'i')
                                     .replace(/ai/g, 'a')
                                     .replace(/ober/g, 'o')
                                     .replace(/ufat/g, 'u');
    localStorage.setItem('texto', textoDescriptografado);
    window.location.href = 'result.html';
}

function mostrarTexto() {
    var texto = localStorage.getItem('texto');
    document.getElementById('resultado').textContent = texto;
}


