function validarFormulario() {
    var nome = document.getElementbyid("nome").value;
    var mensagemErro = document.getElement("mensagemErro")

    if (nome === ""){
        mensagemErro.innerhtml = " Por favor, preencha o campo de nome.";
        return false;
    }

    return true;
}