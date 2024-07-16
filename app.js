document.getElementById('texto').addEventListener('input', function (e) {
    const textarea = e.target;
    const originalValue = textarea.value;
    const validText = originalValue.replace(/[^a-z\s.,!?]/g, '');
    if (originalValue !== validText) {
        alert('Apenas letras minúsculas e sem acento são permitidas.');
        textarea.value = validText;
    }
});
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

// Função para copiar o texto para o clipboard
function copiarTexto() {
    var texto = document.getElementById('resultado').textContent;
    navigator.clipboard.writeText(texto).then(function() {
        alert('Texto copiado para o clipboard!');
    }).catch(function(error) {
        alert('Falha ao copiar texto: ', error);
    });
}